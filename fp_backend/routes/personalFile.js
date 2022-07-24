const express = require("express");
const router = express.Router();
const dbConnection = require("../utils/database");

// 取得「member」和「favorite_activity」資料表的內容並顯示
router.get("/getUserInfo", (req, res) => {
  let MemID = req.query.id;

  let sql =
    "SELECT * , DATE_FORMAT(`Birthday`,'%Y-%m-%d')as Birthday , TIMESTAMPDIFF(YEAR,Birthday,CURDATE()) AS Age , Gender , CityId  , Job FROM member m where MemId = ?;" +
    "select * from favorite_activity where MemId = ?";
  dbConnection.query(sql, [MemID, MemID], (err, results) => {
    if (err) {
      throw err;
    }
    if (results.length > 0) {
      let member = {
        MemID: "",
        Pwd: "",
        Email: "",
        NickName: "",
        Permission: "",
        Birthday: "",
        CityId: "",
        Gender: "",
        Job: "",
        Interest: "",
        FindPurpose: [],
        FindGender: [],
        FavoriteActivity: [],
        Introduction: "",
        JoinDate: "",
        Avatar: "",
        Age: "",
      };
      member = results[0][0];
      member.FavoriteActivity = results[1];
      res.json(member);
    }
  });
});

// 大頭照
router.get("/getUserAvatar", (req, res) => {
  let MemID = req.query.id;
  let avatarSql = "SELECT MemID ,Avatar FROM member WHERE MemID =?";
  dbConnection.query(avatarSql, [MemID], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      res.json(result);
    }
  });
});

module.exports = router;
