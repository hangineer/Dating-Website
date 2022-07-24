const { localsName } = require("ejs");
const express = require("express");
const router = express.Router();
// const mysql = require("mysql");
const dbConnection = require("../utils/database");
const authController = require('../controllers/auth.controller')

// Login page
//localhost:5000/login
router.get("/", (req, res) => {
  res.render("user/login");
});
// router.get("/loginInfo", (req, res) => {
//   const information = req.cookies["apple"];
//   console.log(information);
//   res.clearCookie("apple", { httpOnly: true });

//   res.render("loginInfo", {
//     nickName: information.nickName,
//     gender: information.gender,
//   });
// });
router.post("/", authController.signin)
  

module.exports = router;
