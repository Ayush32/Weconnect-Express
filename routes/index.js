/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
const express = require('express');
const router  = express.Router();
const homeController = require('../controllers/home_controller')
// const userController = require('../controllers/user_controller')

router.get('/', homeController.home)
// router.get('/user', userController.user)

module.exports = router