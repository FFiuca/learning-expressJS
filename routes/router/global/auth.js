const router = require('express').Router()
const passport = require('passport')

router.get('/login', (req, res)=>{
    res.render('main/login', {
        layout : false // if you not use main layouts instead you init false to layout param
    })
})

router.post('/login', passport.authenticate('local', {
    failureRedirect : '/login',
    successRedirect : '/admin'
}))

router.get('/logout', (req, res, next)=>{
    req.logOut((err)=>{
        if(err)
            return next(err)
        
        res.redirect('/login')
    })
})

module.exports = router