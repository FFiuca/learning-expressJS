const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()

const passport = require('passport')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const sequelizeSession = require('connect-session-sequelize')(expressSession.Store) // for save session to prevent auto reset session when server restart
const initPassport = require('./middlewares/auth')
const bodyParser = require('body-parser')
const history = require('history').createBrowserHistory

//mainlib
// const mainlib = require('./libraries/mainlib')

//SECTION - Config
const configView = require('./config/view');

// SECTION - Middlewares
const bin = require('./middlewares/bin')
const thirdM = require('./middlewares/third');
// const { route } = require('./routes/router/admin/user');


// SECTION - Initilaization
const app = express()

configView.viewEngine(app)

app.use(bin.public)
app.use(bin.json)
app.use(bin.urlencoded)
// app.use(express.urlencoded({extended: false}))

app.use(thirdM.cors)
app.use(thirdM.morgan)
app.use(thirdM.bodyParser)
app.use(thirdM.expressLayout)
thirdM.liveReload(app)
// thirdM.bodyParser(app)

app.use(cookieParser())
// app.use(bodyParser.urlencoded({ extended: true}))

const configSessionSequelize = new sequelizeSession({
    db : require('./db/connect').config,
    expiration: 1000* 60* 60* 24* 2, // 2 days
})

app.use(expressSession({
    secret: process.env.SESSION_KEY || 'key',
    resave : false,
    saveUninitialized : false, 
    store: configSessionSequelize,
    proxy: true
}))

// NOTE for sync(create/sync) table session for plugin
configSessionSequelize.sync()

initPassport(passport, app)

// app.use(passport.initialize())
// app.use(passport.session())

const mappingMiddlewareAuth = require('./middlewares/mappingMiddlewareRouter')(app);

// app.set('views', path.join(__dirname, 'views')) // NOTE - if use custom root views folder, must oeverride setting views

const port = process.env.PORT || 3000


// console.log(require('./routes/index'))
const route = require('./routes/index')
const { session } = require('passport')
// const { bodyParser } = require('./middlewares/third')

// auth
app.use('/admin/user', route.router.auth.user)
app.use('/admin', route.router.auth.admin)

// guest
app.use('/', route.router.guest.auth)


app.all('/query/:id?', (req, res) =>{
    res.status(200).json({
        query : req.query,
        params : req.params,
        body : req.body,
        hh : 'aakka',
        dump : [
            req.body
        ]
    })
})

app.all('/', (req, res) => res.send('Welcome Home'))
app.get('/coba', (req, res) => res.render('main/login'))
// app.post('/login', passport.authenticate('local', {failureRedirect: '/login', }), (req, res)=>{
//     console.warn('session', req.session, req.user.userName)

//     res.redirect('/admin')
// })

console.log('listener', app.listeners(), app.rawListeners(), app.get('view engine'), configView.viewEngine, app.get('views'), __dirname)

// console.log(thirdM.liveReload)

app.listen(port, ()=>{
    console.log(`App is listening on http://localhost:${port}`)
})