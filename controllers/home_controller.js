/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const Post = require("../models/post");
const User = require("../models/user");
module.exports.home = async function (req, res) {
  // Post.find({},function(err, posts){
  //   return res.render('home', {
  //     titleName: "Sociolbox | Home",
  //     posts: posts
  //   });
  // });

  let posts = await Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });
  let users = await User.find({});

  User.find({}, function (err, users) {
    return res.render("home", {
      titleName: "Socialbox | Home",
      posts: posts,
      all_users: users,
    });
  });
};
