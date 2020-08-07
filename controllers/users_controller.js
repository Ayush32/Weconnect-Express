/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
const { model } = require("../models/user");
const User = require("../models/user");

/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
module.exports.profile = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    return res.render("user_profile", {
      titleName: "User Profile",
      profile_user: user,
    });
  });
};

module.exports.update = function (req, res) {
  if (req.user.id == req.params.id) {
    User.findByIdAndUpdate(req.params.id, req.body);
  }
};

// render signup page
module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_sign_up", {
    titleName: "HiveConnect | Sign Up",
  });
};
// render signIn page
module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/profile");
  }
  return res.render("user_Sign-in", {
    titleName: "HiveConnect | Sign In",
  });
};

// get the sign data

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing up");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating user while in signing up");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.createSession = function (req, res) {
  // TODO

  return res.redirect("/");
};

module.exports.destroySession = function (req, res) {
  req.logout();
  return res.redirect("/");
};
