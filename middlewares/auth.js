// const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
// const localStrategy = passport.Strategy
const model = require('./../db/models/index')

function initializePassport(passport, app){
    // const localStrategy = passport.Strategy

    passport.use('local', new localStrategy(async function (userName, password, done){
        //NOTE - localstrategy function param done
        // first is error catch, second is user data or false if not auth, third is data which return to response router 
        
        console.log(userName, password, done)

        const user = await model.user.findOne({
            where: {
                userName : userName
            }
        })

        if(user===null){
            return done(null, false, {message: 'User not found!'})
        }

        if(user!==null){
            try{
                if(await bcrypt.compare(password, user.password)){
                    return done(null, user, {message: 'Login Success!'})
                }else{
                    return done(null, false, {message: 'Password didn\'t match'})
                }
            }catch(e){
                return done(e)
            }
        }

    }))

    // NOTE - serialize into session
    passport.serializeUser((user, done)=>{
        console.log('serializer', user)

        done(null, user.id)
    })

    // NOTE - deserialize when pull from session
    passport.deserializeUser(async (id, done)=>{
        console.log('deserialize', id)

        let temp = await model.user.findOne({where: {id: id}})
        
        console.log('deserializer', temp)

        return done(null, temp)
    })

    app.use(passport.initialize())
    app.use(passport.session())

}

module.exports =  initializePassport




