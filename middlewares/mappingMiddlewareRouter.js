const mainlib = require('./../libraries/mainlib')
const isAuth = require('./custom/isAuth')
const isGuest = require('./custom/isGuest')

const init = (app, middleware=null)=>{
    console.log('mapping middleware')

    app.use('/admin', isAuth)

    // REVIEW - 
    // NOTE - middleware grouping akan selalu membawa param req, res dan next
    // app.use('/login', [
    //     (req, res, next)=>{
    //         // console.log('middleware gorup 1', req)

    //         next()
    //     },(req, res, next)=>{
    //         console.log('middleware gorup 2')

    //         next()
    //     }
    // ])

    app.use('/login', isGuest)
}

module.exports = init