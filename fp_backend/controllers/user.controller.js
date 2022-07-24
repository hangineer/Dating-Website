const mysql = require("mysql");
const dbConnection = require("../utils/database");

exports.register = (req, res, nextStep) => {
  // 把req.body物件存放到一個變數
  //  let body = req.body;
  //  res.send(body);

  // 把寫入的資料印出

  // 寫入資料到資料庫
  let sql = '';
  let information = []
  let update = req.body.id?true:false;
  if(update){
    sql = "update member set Pwd=?,Email=?,NickName=?,Birthday=?,CityId=?,Gender=?,Job=?,Interest=?,Introduction=? where MemID = ?";
    information = [
      req.body.password,
      req.body.email,
      req.body.nickName,
      req.body.birthday,
      req.body.city,
      req.body.gender,
      req.body.job,
      req.body.hobby,
      req.body.introduction,
      req.body.id,
    ];
  }else{
    sql = "INSERT INTO member(Pwd,Email,NickName,Birthday,CityId,Gender,Job,Interest,Introduction,Avatar) VALUES (?,?,?,?,?,?,?,?,?,?)";
    information = [
        req.body.password,
        req.body.email,
        req.body.nickName,
        req.body.birthday,
        req.body.city,
        req.body.gender,
        req.body.job,
        req.body.hobby,
        req.body.introduction,
        req.body.avatar,
      ];
  }
  dbConnection.query(
    sql,
    information,
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
        res.status(402).send(err);
      }
      // 查看會員ID(主鍵)
      
      let memId = update?req.body.id:result.insertId;
      let body = req.body;
      console.log("MemId just insert", memId);

      // 以下會把資料寫入favorite_activity
      let activitySql =
        "INSERT INTO favorite_activity(MemId,ActivityName) VALUES ?";
      let activityArray = [];
      let activity = body["activity"];

      for (let i = 0; i < activity.length; i++) {
        let activityObj = [memId, activity[i]]; //[[10,food]]
        activityArray.push(activityObj);
      }

      // if (typeof activity != "string") {
      // } else {
      //   let activityObj = [memId, activity];
      //   activityArray.push(activityObj);
      // }
      console.log(typeof activity);

      dbConnection.query(activitySql, [activityArray], (err, activityRes) => {
        if (err) {
          console.log(err);
          throw err;
          res.status(402).send(err);
        }
      });

      // 以下會把資料寫入find_purpose
      let purposeSql = "INSERT INTO find_purpose(MemId,Detail) VALUES ?";
      let purposeArray = [];
      let purpose = body["kind"];

      for (let i = 0; i < purpose.length; i++) {
        let purposeObj = [memId, purpose[i]];
        purposeArray.push(purposeObj);
      }
      // if (typeof purpose != "string") {
      // } else {
      //   let purposeObj = [memId, purpose];
      //   purposeArray.push(purposeObj);
      // }
      dbConnection.query(purposeSql, [purposeArray], (err, purposeRes) => {
        if (err) {
          console.log(err);
          throw err;
          res.status(402).send(err);
        }
      });

      // 以下會把資料寫入find_gender
      let genderSql = "INSERT INTO find_gender(MemId,Gender) VALUES ? ";
      let genderArray = [];
      let gender = body["wantPair"];
      for (let i = 0; i < gender.length; i++) {
        let genderObj = [memId, gender[i]];
        genderArray.push(genderObj);
      }
      // if (typeof gender != "string") {

      // } else {
      //   let genderObj = [memId, gender];
      //   genderArray.push(genderObj);
      // }
      dbConnection.query(genderSql, [genderArray], (err, genderRes) => {
        if (err) {
          console.log(err);
          throw err;
          res.status(402).send(err);
        }
      });
      res.status(200).send("註冊成功");
    }
  );
};
