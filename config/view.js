const express = require('express')

const exp = {}
const app_ = express()

exp.viewEngine = (app)=> app.set('view engine', 'ejs')

module.exports = exp