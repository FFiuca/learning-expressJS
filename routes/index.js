// console.log('index router')

let exp = {
    router: {
        auth: {},
        guest: {}
    }, 
    api: {}
}
// console.log(exp)

// SECTION - router
const user = require('./router/admin/user')
const admin = require('./router/admin/admin')
const auth = require('./router/global/auth')

const init = (app)=>{

    //SECTION - auth
    app.use('/', auth)


    //SECTION - admin
    app.use('/admin', admin)
    app.use('/admin/user', user)
}


// auth
exp.router.auth.user = user
exp.router.auth.admin = admin

//guest
exp.router.guest.auth = auth

// module.exports = exp

module.exports = init