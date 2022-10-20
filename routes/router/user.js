let router = require('express').Router(); // inget anda harus jalankan fungsinya ()

router.get('/getUser/:id?', (req, res)=>{
    res.send('Berhasil');
})

module.exports = router