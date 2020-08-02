/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const Post = require("../models/post");
const User = require("../models/user");

module.exports.create = function (req, res) {
  Post.create(
    {
      content: req.body.content,
      user: req.user._id,
    },
    function (err, post) {
      if (err) {
        console.log("Error in creating a post");
        return;
      }
      return res.redirect("back");
    }
  );
};
