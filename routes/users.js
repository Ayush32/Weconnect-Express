/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users_controller");
const passport = require("passport");

router.get("/profile", passport.checkAuthentication, usersController.profile);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);
router.get("/destroy-session", usersController.destroySession);

// create the session
router.post("/create", usersController.create);
// use passport as a authenticate
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/sign-in" }),
  usersController.createSession
);

module.exports = router;
