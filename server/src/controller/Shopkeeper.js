const UserModel = require('../models/usermodels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { errorHandle } = require('../errorhandling/errorHandling')
require('dotenv').config()




module.exports.CreaterShopkeeper = async (req, res) => {
    try {

        const data = req.body;

        
        if (data.password==undefined) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })
        if (data.role=='admin' || data.role=='user') return res.status(400).send({ status: false, msg: 'Invalid Role' })

        const passwordBcrypt = await bcrypt.hash(data.password, 10 )
        req.body.password = passwordBcrypt
        req.body.role = 'shopkeeper'

        const CreateUserDataDB = await UserModel.create(data)
        return res.status(200).send({ status: true, msg: "Successfully Data Created", data: CreateUserDataDB })

    }
    catch (error) { return errorHandle(error, res) }
}