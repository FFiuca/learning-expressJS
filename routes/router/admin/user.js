let router = require('express').Router(); // inget anda harus jalankan fungsinya ()
const { mainLayout } = require('./../../../config/view')

const userCont = require('./../../../controllers/admin/user')

router.get('/', userCont.userView)

router.get('/getUser/:id?', (req, res)=>{
    res.send('Berhasil');
})


module.exports = router