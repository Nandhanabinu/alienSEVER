const express = require ('express')
const userController = require('../Controllers/userController')
const router = new express.Router()
router.post('/register',userController.register)
router.post('/login',userController.login)
module.exports = router