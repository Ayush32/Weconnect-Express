/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");
const { resolveInclude } = require("ejs");

module.exports.create = async function (req, res) {
  try {
    await Post.create({
      content: req.body.content,
      user: req.user._id,
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let post = await Post.findById(req.params.id);
  } catch (err) {
    if (post.user == req.user.id) {
      post.remove();

      await Comment.deleteMany({ post: req.params.id });
      return res.redirect("back");
    } else {
      return res.redirect("back");
    }
  }
};
