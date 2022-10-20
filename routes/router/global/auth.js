const router = require('express').Router()

router.get('/login', (req, res)=>{
    res.render('main/login', {
        layout : false // if you not use main layouts instead you init false to layout param
    })
})

module.exports = router