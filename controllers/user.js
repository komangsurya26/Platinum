const { Users } = require ('../models')
const { where } = require('sequelize')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
const rahasia = 'ini rahasia'


//JWT token
exports.register = async (req,res,next) => {
    try {
        const { firstName,lastName,email,password } = req.body

    const cek = await Users.findOne({ where: { email: email}})
    if (cek) {
        throw new Error("email sudah ada");
    }
    if (!email || !password || !firstName || !lastName ) {
        throw new Error("masukan data dengan benar");
    }
    const enc = bcrypt.hashSync(password,10)
    
    Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: enc
    })
       .then(r => {
        console.log(r)
        return res.status(200).json("register sukses!!")
       })
    } catch (error) {
        return res.status(500).json({succes: false , error: error.message })
    }
}

exports.login = async (req,res) =>{
    try {
        const login = {
            email :req.body.email,
            password :req.body.password
        }
        const checkEmail = await Users.findOne({where:{email:login.email}})
        if(!checkEmail){
            return res.status(400).json('email tidak ada')
        }

        const resultLogin = bcrypt.compareSync(login.password, checkEmail.password)
        if(!resultLogin){
            return res.status(400).json('password salah')
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


  
  



