const mainlib = require('./../../libraries/mainlib')

module.exports = (req, res, next)=>{
    console.log('isAuth', req.user, req.isAuthenticated())

    // if(mainlib.isset(req.user))
    if(req.isAuthenticated()) //NOTE -  use this instead req.user due data not init yet (actually init when exceture controller function route)
        return next()

    return res.redirect('/login')
}