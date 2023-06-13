const passport = require ('passport')
const localStrategy = require ('passport-local').Strategy;
const bcrypt = require ('bcrypt')
const { Strategy: JWTStrategy,ExtractJwt} = require('passport-jwt')

const {Users} = require ('../models')



//LOCAL STRATEGY TOKEN
// const auth = async (email,password,done)=>{

//     try {
//         const user = await Users.findOne({
//             where: {email: email}
//         })
//         if (!user) {
//             return done(null,false,{message: "user tidak ada"})
//         }

//         const validPass = bcrypt.compareSync(password, user.password)
//         if (!validPass) {
//             return done(null,false,{message: "password tidak ada"})
//         }
//         return done(null,user)
//     } catch (error) {
//         return done(null,false,{message: error.message})
//     }
// }

// passport.use(new localStrategy({
//     usernameField: "email",
//     passwordField: "password"
// }, auth));

// passport.serializeUser((Users,done)=>{
//     return done(null,Users.id)
// })

// passport.deserializeUser(async(id,done)=>{
//     const user = await Users.findByPk(id)
//     return done(null,user)
// })


//JWT TOKEN
const options ={
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'ini rahasia'
}
passport.use(new JWTStrategy(options,(payload,done)=>{
    Users.findByPk(payload.id)
    .then(user=>done(null,user))
    .catch(err=>done(err,false))
}))

module.exports= passport