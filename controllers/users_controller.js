/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
module.exports.profile = function (rex, res) {
  return res.render("user_profile", {
    titleName: "User Profile",
  });
};
