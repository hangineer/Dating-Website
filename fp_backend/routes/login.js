const { localsName } = require("ejs");
const express = require("express");
const router = express.Router();
const dbConnection = require("../utils/database");
const authController = require("../controllers/auth.controller");

// Login page
//localhost:5000/login
router.get("/", (req, res) => {
  res.render("user/login");
});
router.post("/", authController.signin);

module.exports = router;
