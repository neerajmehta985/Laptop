const express = require('express')
const { CreaterUser, LogInUser, userUpadte, deleteUser } = require('../controller/userController');
const { CreaterAdmin, getAllUserData,getAllShopkeeperData, LogInAdmin } = require('../controller/AdminController');
const { CreaterShopkeeper } = require('../controller/Shopkeeper');
const { authenticate } = require('../middleware/UserAuth')
const {UserValition}=require('../middleware/Uservalidation')

const multer = require('multer')

const upload = multer({ storage: multer.diskStorage({}), })

const router = express.Router()
// User Api's
router.post('/CreaterUser', upload.single('profileImg'),UserValition, CreaterUser)
router.post('/LogInUser', upload.single(), LogInUser)
router.put('/userUpadte/:id', upload.single(), userUpadte)
router.delete('/deleteUser/:id', deleteUser)

// Admin Api's
router.post('/CreaterAdmin', upload.single(), CreaterAdmin)
router.post('/LogInAdmin', upload.single(), LogInAdmin)
router.get('/getAllUserData',authenticate, getAllUserData)
router.get('/getAllShopkeeperData',authenticate, getAllShopkeeperData)


// Shopkeeper Api's
router.post('/CreaterShopkeeper', upload.single(), CreaterShopkeeper)


router.all('/', (req, res) => {
    return res.status(404).send({ status: false, msg: 'url Invalid' })
})


module.exports = router
