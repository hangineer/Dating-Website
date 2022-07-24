const express = require("express");
const router = express.Router();
const dbConnection = require("../utils/database");
const { Success, Error } = require("../response");

// 修改資料
router.post("/editInfo", (req, res) => {
  var body = req.body;
  var data = [
    body.nickName,
    body.birthday,
    body.city,
    body.gender,
    body.job,
    body.hobby,
    body.introduction,
    // body.avatar,
    body.id,
  ];
  const updateMember = new Promise((resolve, reject) => {
    const updateSql =
      "UPDATE member SET NickName=? , Birthday = ? , CityId = ? ,Gender= ? , Job = ? , Interest = ? , Introduction = ?  WHERE MemID = ?;";
    // "UPDATE member SET NickName=? , Birthday = ? , CityId = ? ,Gender= ? , Job = ? , Interest = ? , Introduction = ? , Avatar = ? WHERE MemID = ?;";
    dbConnection.query(updateSql, data, function (err, updateResults, fields) {
      if (err) {
        throw err;
      } else {
        resolve();
      }
    });
  });
  const updateActivity = new Promise((resolve) => {
    let updateActivitySql =
      //先移除所有原本的activity
      "DELETE FROM favorite_activity where MemId = ? ;" +
      //再新增這次edit的activity
      "INSERT INTO favorite_activity(MemId,ActivityName) VALUES ?";
    let activityArray = [];
    let activity = body["activity"];

    for (let i = 0; i < activity.length; i++) {
      let activityObj = [body.id, activity[i]]; //[[10,food]]
      activityArray.push(activityObj);
    }
    dbConnection.query(
      updateActivitySql,
      [body.id, activityArray],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve();
        }
      }
    );
  });

  updateMember
    .then(() => {
      return updateActivity;
    })
    .then(() => {
      res.status(200).send("Success");
    })
    .catch(() => {
      res.status(402).send("Edit Failed");
    });
});
module.exports = router;
