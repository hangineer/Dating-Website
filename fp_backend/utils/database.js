const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "final_project",
  multipleStatements: true,
});
// const db = mysql.createConnection({
//   host: process.env.DATABASE_HOST, //"localhost"
//   user: process.env.DATABASE_USER, //"root"
//   password: process.env.DATABASE_PWD, //""
//   database: process.env.DATABASE, //"final_project"
//   multipleStatements: true,
// });
const connection = db.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("DB Success!!!");
  }
});

module.exports = db;
