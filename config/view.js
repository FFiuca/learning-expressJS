const express = require('express')

const exp = {}
const app_ = express()

exp.viewEngine = (app)=> app.set('view engine', 'ejs')
// exp.setting.dirViews = (app)=> app.use()

exp.admin = {} 
exp.admin.mainLayout = 'admin/main/main'

module.exports = exp