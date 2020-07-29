/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
module.exports.home = function (req, res) {
  console.log(req.cookies);
  res.cookie("user_id", 399);

  return res.render("home", {
    titleName: "Hiveconnect Home",
  });
};
