const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling')
require('dotenv').config()




module.exports.CreaterAdmin = async (req, res) => {
    try {

        const data = req.body;

        
        if (data.password==undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (data.role=='user' || data.role=='shopkeeper') return res.status(400).send({ status: false, msg: 'Invalid Role' })

        const passwordBcrypt = await bcrypt.hash(data.password, 10 )
        req.body.password = passwordBcrypt
        req.body.role = 'admin'

        const CreateUserDataDB = await UserModel.create(data)
        return res.status(200).send({ status: true, msg: "Successfully Data Created", data: CreateUserDataDB })

    }
    catch (error) { return errorHandle(error, res) }
}

module.exports.LogInAdmin = async (req, res) => {
    try {

        const data = req.body;

        if (data.password == undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })

        const checkemail = await UserModel.findOne({ email: data.email, role:'admin' })
        if (!checkemail) return res.status(404).send({ status: false, msg: 'User not found pls SignUp first' })

        const CheckPass = await bcrypt.compare(data.password, checkemail.password)
        if (!CheckPass) return res.status(400).send({ status: false, msg: 'wrong Pasword pls Insert Correct Password' })

        const token = jwt.sign({
            UserId: checkemail._id,
            Author: "neeraj"
        },
            process.env.AdminKey, { expiresIn: '12h' }
        )

        return res.status(200).send({ status: true, msg: "Successfully LogIn", token: token, UserId: checkemail._id })
        
    }
    catch (error) { return errorHandle(error, res) }
}


module.exports.getAllUserData = async (req, res) => {
    try {

        const getData = await UserModel.find({isDelete:false, role:'user'})
        return res.status(200).send({ status: true, msg: "Successfully Get All User Data", data: getData })
    }
    catch (error) { return res.status(500).send({ status: false, msg: error.message }) }
}


module.exports.getAllShopkeeperData = async (req, res) => {
    try {

        const getData = await UserModel.find({isDelete:false, role:'shopkeeper'})
        return res.status(200).send({ status: true, msg: "Successfully Get All shopkeeper Data", data: getData })
    }
    catch (error) { return res.status(500).send({ status: false, msg: error.message }) }
}