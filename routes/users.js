/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
const express = require('express')
const router = express.Router();
const usersController = require('../controllers/users_controller')

router.get('/profile', usersController.profile)



module.exports = router;