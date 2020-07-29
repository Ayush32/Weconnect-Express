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
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, function (err, user) {
      if (user) {
        return res.render("user_profile", {
          titleName: "user Profile",
          user: user,
        });
      }
      return res.redirect("/users/sign-in");
    });
  } else {
    return res.redirect("/users/sign-in");
  }
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
  // find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing in");
      return;
    }

    if (user) {
      // handle password don't match

      if (user.password != req.body.password) {
        return res.redirect("back");
      }

      res.cookie("user_id", user.id);
      return res.redirect("/users/profile");
    } else {
      return res.redirect("back");
    }
    // handle password which don't match

    // handle session creation

    // handle user
  });
};

module.exports.destroySession = function (req, res) {
  if (user) {
    return res.redirect("/");
  }
};
