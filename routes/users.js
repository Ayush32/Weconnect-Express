/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");

router.get("/profile", usersController.profile);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);

// create the session
router.post("/create", usersController.create);

module.exports = router;
