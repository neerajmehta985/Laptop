const { ValidName, Validemail, Validpassword, ValidMobile } = require('../validation/Validation')


module.exports.UserValition = (req, res, next)=>{
    try {
        const data = req.body;
        const { email, name, password } = data;

        if(!name) return res.status(400).send({status:false,msg:'Name is required'})
        if(!ValidName(name)) return res.status(400).send({status:false,msg:'Invalid Name'})

        if(!email) return res.status(400).send({status:false,msg:'Email is required'})
        if(!Validemail(email)) return res.status(400).send({status:false,msg:'Invalid Email'})

        if(!password) return res.status(400).send({status:false,msg:'Password is required'})
        if(!Validpassword(password)) return res.status(400).send({status:false,msg:'Invalid Password'})
            
            next()
    }
    catch (e) { return res.status(500).send({ status: false, msg: e.message }) }
}