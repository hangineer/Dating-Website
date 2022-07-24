const express = require("express");
const router = express.Router();
const dbConnection = require("../utils/database");
// const axios = require("axios");

router.post("/upload", (req, res) => {
  let uploadSql = "INSERT INTO member(Avatar) VALUES (?)";
  dbConnection.query(uploadSql, [req.body.avatar], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result.insertId)
    res.status(200).json(result.insertId);
  });
});

module.exports = router;
