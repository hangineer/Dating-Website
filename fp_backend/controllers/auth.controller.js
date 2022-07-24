const db = require("../utils/database");
const config = require("../config/auth.config.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  console.log(req.body);
  let userId = req.body.email;
  let password = req.body.password;
  let sql = "select * from member where Email = ?";
  db.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send({
        message: "Internal Error", //資料庫有問題
      });
    }
    if (result.length == 0) {
      return res.status(404).send({
        message: "尚無此使用者，請先註冊", //User Not Found
      });
    }
    let member = result[0];
    let passwordIsValid = passwordValid(member.Pwd, password);
    //wrong password
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "密碼錯誤，請重新輸入", //Invalid Password
      });
    }
    let token = jwt.sign({ userId: member.MemID }, config.secret, {
      expiresIn: 1800,
    });
    res.status(200).send({
      id: member.MemID,
      username: member.NickName,
      email: member.Email,
      accessToken: token,
    });
  });
};

passwordValid = (_password, password) => {
  return password == _password;
};
