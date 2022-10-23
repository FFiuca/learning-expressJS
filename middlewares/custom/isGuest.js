const history = require('history').createMemoryHistory()
const mainlib = require('./../../libraries/mainlib')

module.exports = (req, res, next)=>{
    console.log('isGuest', req.isUnauthenticated(), req.user)

    // if(!mainlib.isset(req.user)){
    if(req.isUnauthenticated()){
        console.log('isGuest true', req.user)

        return next()
    }

    return res.redirect('/admin')
    // console.log(history.back())
    // return res.redirect(history.back())
}