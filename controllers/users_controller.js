/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
const { model } = require("../models/user");

/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
module.exports.profile = function (rex, res) {
  return res.render("user_profile", {
    titleName: "User Profile",
  });
};

// render signup page
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    titleName: "HiveConnect | Sign Up",
  });
};
// render signIn page
module.exports.signIn = function (req, res) {
  return res.render("user_Sign-in", {
    titleName: "HiveConnect | Sign In",
  });
};

// get the sign data

module.exports.create = function (req, res) {
  // TODO
};

module.exports.createSession = function (req, res) {
  // TODO
};
