/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
const express = require("express");
const router = express.Router();
const passport = require("passport");

const commentsController = require("../controllers/comments_controller");
const { route } = require("./posts");
const { destroy } = require("../controllers/posts_controller");

router.post("/create", passport.checkAuthentication, commentsController.create);

router.get(
  "/destroy/:id",
  passport.checkAuthentication,
  commentsController.destroy
);

module.exports = router;
