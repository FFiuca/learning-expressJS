const express = require('express')
const path = require('path')

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

app.use(thirdM.cors)
app.use(thirdM.morgan)
app.use(thirdM.bodyParser)
app.use(thirdM.expressLayout)
thirdM.liveReload(app)

// app.set('views', path.join(__dirname, 'views')) // NOTE - if use custom root views folder, must oeverride setting views

const port = process.env.PORT || 3000


app.listen(port, ()=>{
    console.log(`App is listening on http://localhost:${port}`)
})

// console.log(require('./routes/index'))
const route = require('./routes/index')

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
        hh : 'aakka'
    })
})

app.all('/', (req, res) => res.send('Welcome Home'))
app.get('/coba', (req, res) => res.render('main/login'))

console.log('listener', app.listeners(), app.rawListeners(), app.get('view engine'), configView.viewEngine, app.get('views'), __dirname)

// console.log(thirdM.liveReload)