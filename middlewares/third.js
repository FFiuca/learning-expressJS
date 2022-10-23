// 'use strict'

const cors = require('cors') // cros origin security
const multer = require('multer')
const morgan = require('morgan')
const expressLayout = require('express-ejs-layouts')
const liveReload = require('livereload')
const connectLiveReload = require('connect-livereload')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const expressSession = require('express-session')

const exp = {}

exp.cors = cors()
exp.morgan =  morgan('dev')
exp.expressLayout = expressLayout
// exp.bodyParser = (app)=> app.use(bodyParser.urlencoded({ extended: true}))
exp.bodyParser = bodyParser.urlencoded({ extended: true})

// handle file upload multer
let upload = multer({ dest : 'tmp'})
exp.multer = upload

// handle hoat reload
const liveReloadServer = liveReload.createServer({
    port: 3005
}, ()=>{
    console.log('live reload starting')
})

liveReloadServer.server.once('connection',  ()=>{
    setTimeout(()=> liveReloadServer.refresh('/'), 100)
    // liveReloadServer.refresh('/')
})

exp.liveReload = (app)=> app.use(connectLiveReload())

// console.log(liveReloadServer)

module.exports = exp