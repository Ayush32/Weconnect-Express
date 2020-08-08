/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");
const {
  resolveInclude
} = require("ejs");

module.exports.create = async function (req, res) {
  try {
    await Post.create({
      content: req.body.content,
      user: req.user._id,

    });

    req.flash('success', 'Post Published')

    return res.redirect('back')
  } catch (err) {
    req.flash('error', err)
    return;
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let post = await Post.findById(req.params.id);

    if (post.user == req.user.id) {
      post.remove();

      await Comment.deleteMany({
        post: req.params.id
      });

      req.flash('success', 'Post and associated comment deleted')
      return res.redirect("back");
    } else {
      req.flash('error', 'You cannot delete this post')
      return res.redirect("back");
    }
  } catch (err) {
    req.flash('error', err)
    return;
  }
};