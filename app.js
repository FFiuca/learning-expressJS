const express = require('express')

//SECTION - Config
const configView = require('./config/view');

// SECTION - Middlewares
const bin = require('./middlewares/bin')
const thirdM = require('./middlewares/third')


// SECTION - Initilaization
const app = express()

configView.viewEngine(app)

app.use(bin.public)
app.use(bin.json)
app.use(bin.urlencoded)

app.use(thirdM.cors)
app.use(thirdM.morgan)
// app.use(thirdM.liveReload)
app.use(thirdM.expressLayout)
thirdM.liveReload(app)

const port = 3000


app.listen(port, ()=>{
    console.log(`App is listening on http://localhost:${port}`)
})

// console.log(require('./routes/index'))
app.use('/user', require('./routes/index').router.user)

app.all('/query/:id?', (req, res) =>{
    res.status(200).json({
        query : req.query,
        params : req.params,
        body : req.body,
        hh : 'aakka'
    })
})

app.all('/', (req, res) => res.send('Welcome Home'))


console.log('listener', app.listeners(), app.rawListeners(), app.get('view engine'), configView.viewEngine)
// console.log(thirdM.liveReload)