const { Users } = require ('../models')
const { where } = require('sequelize')
const bcrypt = require ('bcrypt')
const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const rahasia = 'ini rahasia'

//LOCAL STRATEGY TOKEN
// exports.register = async (req,res,next) => {
//     try {
//         const register = {
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: req.body.password,
//         };
//     const cek = await Users.findOne({ where: { email: register.email}})
//     if (cek) {
//         throw new Error("email sudah ada");
//     }
//     if (!register.email || !register.password || !register.firstName || !register.lastName ) {
//         throw new Error("masukan data dengan benar");
//     }
//     const enc = bcrypt.hashSync(register.password,10)
    
//     Users.create({
//         firstName: register.firstName,
//         lastName: register.lastName,
//         email: register.email,
//         password: enc
//     })
//        .then(r => {
//         console.log(r)
//         return res.render('login')
//        })
//     } catch (error) {
//         console.error(error)
//         return res.json({succes: false , error: error.message, 
//         message:'terjadi kesalahan saat register'})
//     }
// }

// exports.loginPage = (req,res)=>{
//     let message =''
//     if (req.session.messages){
//         message=req.session.messages[0]
//         req.session.message=[]
//     }
//     return res.render('login',{message:message})
// }

// exports.login = passport.authenticate('local',{
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureMessage: true,
// })


//JWT token
exports.register = async (req,res,next) => {
    try {
        const register = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        };
    const cek = await Users.findOne({ where: { email: register.email}})
    if (cek) {
        throw new Error("email sudah ada");
    }
    if (!register.email || !register.password || !register.firstName || !register.lastName ) {
        throw new Error("masukan data dengan benar");
    }
    const enc = bcrypt.hashSync(register.password,10)
    
    Users.create({
        firstName: register.firstName,
        lastName: register.lastName,
        email: register.email,
        password: enc
    })
       .then(r => {
        console.log(r)
        return res.render('login')
       })
    } catch (error) {
        console.error(error)
        return res.json({succes: false , error: error.message, 
        message:'terjadi kesalahan saat register'})
    }
}

exports.login = async (req,res) =>{
    try {
        const email = req.body.email
        const password = req.body.password

        const checkEmail = await Users.findOne({where:{email:email}})
        if(!checkEmail){
            return res.render('login',{error:'email tidak ada'})
        }
        const resultLogin = bcrypt.compareSync(password, checkEmail.password)
        if(!resultLogin){
            return res.render('login',{error:'password salah'})
        } 

        //token
        const token = jwt.sign({
            id: checkEmail.id,
            email: checkEmail.email
        },rahasia)
        return res.json({
            id: checkEmail.id,
            email: checkEmail.email,
            token: token,
        })
    }
    catch (error) {
        console.error(error)
    }
}

exports.siapaSaya = (req,res)=>{
    const curent = req.user
    return res.json({
        id:curent.id,
        email: curent.email
    })
}



