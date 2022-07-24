const express = require("express");
const router = express.Router();
const dbConnection = require("../utils/database");
const axios = require("axios");

//註冊
const userController = require("../controllers/user.controller");
const uploadAvatar = require("./upload");
router.post("/register", userController.register);
router.post("/upload", uploadAvatar);
//個人頁面
const PFRouter = require("./personalFile");
const editInfo = require("./editInfo");
router.get("/getUserInfo", PFRouter);
router.get("/getUserAvatar", PFRouter);
router.post("/editInfo", editInfo);
// ----------------------------------------------
// 上課時的例子-1
// router.get("/getAllUsers", (req, res) => {
//   sql = "select * from member";
//   dbConnection.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     if (result.length > 0) {
//       res.json(result);
//     }
//   });
// });

// ----------------------------------------------
// 上課時的例子-2
// router.post("/getUserByID", (req, res) => {
//   console.log("getUserByID");
//   console.log(req.body);
//   sql = "select * from member where MemID = ?";
//   let searchID = req.body.searchID;
//   dbConnection.query(sql, [searchID], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     if (result.length > 0) {
//       res.json(result);
//     }
//   });
// });

module.exports = router;
