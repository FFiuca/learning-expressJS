const configView = require('./../../../config/view')
const router = require('express').Router()

router.get('/', (req, res)=>{
    const data = {
        user : req.user
    }

    res.render('admin/dashboard', {
        layout : configView.admin.mainLayout,
        title : 'Dashboard',
        data: data
    })
})

module.exports = router