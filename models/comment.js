/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */

const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
});
