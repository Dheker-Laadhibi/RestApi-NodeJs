const express = require('express');
const router = express.Router()
const controller = require('./controller')
const UserValidator = require('./validator/User')
//http  Request 
router.post('/users',controller.addUser)
router.get('/users',controller.getUsers)
 router.get('/users/:id',controller.getUser)
 router.patch('/users/:id',controller.updateUser)
router.delete('/users/:id',controller.deleteUser)  
//it's exporting router so they can be used in other files.
module.exports= router