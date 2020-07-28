/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
const express = require('express');
const router  = express.Router();
const homeController = require('../controllers/home_controller')
const usersController = require('../controllers/users_controller')

router.get('/', homeController.home)
router.get('/user', usersController.profile)

module.exports = router