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

// auth
exp.router.auth.user = user
exp.router.auth.admin = admin

//guest
exp.router.guest.auth = auth

module.exports = exp

console.log(__dirname)