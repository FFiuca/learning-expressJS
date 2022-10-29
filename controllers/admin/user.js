//model
const { user } = require('./../../db/models/index')

//other
const configView = require('./../../config/view') 

const userView = async (req, res)=>{
    let dataUser = await user.findAll()

    res.status(200)
    res.render('admin/user', {
        layout: configView.admin.mainLayout,
        title: 'User Page',
        user: dataUser
    })
}


module.exports = {
    userView: userView
}