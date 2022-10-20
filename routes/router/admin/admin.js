const configView = require('./../../../config/view')
const router = require('express').Router()

router.get('/', (req, res)=>{
    res.render('admin/dashboard', {
        layout : configView.admin.mainLayout,
        title : 'Dashboard'
    })
})

module.exports = router