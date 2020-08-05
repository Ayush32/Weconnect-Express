/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const Post = require("../models/post");
module.exports.home = function (req, res) {
  // Post.find({},function(err, posts){
  //   return res.render('home', {
  //     titleName: "Sociolbox | Home",
  //     posts: posts
  //   });
  // });

  Post.find({})
    .populate("user")
    .exec(function (err, posts) {
      return res.render("home", {
        titleName: "Sociolbox | Home",
        posts: posts,
      });
    });
};
