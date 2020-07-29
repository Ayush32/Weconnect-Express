/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hiveconnect_development");

const db = mongoose.connection;

db.on("error", console.log.bind(console, "Error connecting to Mongodb"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
