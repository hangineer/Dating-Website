const express = require("express");
const path = require("path");
const mysql = require("mysql");
const fileUpload = require("express-fileupload"); //上傳圖片
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //開放跨域使用
const dbConnection = require("./utils/database.js");
const app = express();
const publicFolder = path.join(__dirname, "./public");

// const dotenv = require("dotenv");

// dotenv.config({ path: "./.env" });

// const db = mysql.createConnection({
//   host: process.env.DATABASE_HOST, //"localhost"
//   user: process.env.DATABASE_USER, //"root"
//   password: process.env.DATABASE_PWD, //""
//   database: process.env.DATABASE, //"finalproject"
//   multipleStatements: true,
// });

// const connection = dbConnection.connect(function (err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("DB Success!!!");
//   }
// });

app.use(bodyParser.json({ limit: "10MB" })); //解析json資料
app.use(express.static(publicFolder));

app.use(cors());
app.use(cookieParser());
app.use(fileUpload());

// parse urlencoded bodies that sent by HTML forms
app.use(express.urlencoded({ extended: true }));

// parse JSON bodies that sent by API client
app.use(express.json());

// Define Routes
// init frontend server data
const initRouter = require("./routes/init");
app.use("/init", initRouter);
//註冊(編輯和顯示使用者的資料也放在userRouter下)
const userRouter = require("./routes/user");
app.use("/user", userRouter);

//登入
const loginRouter = require("./routes/login");
const auth = require("./auth/auth.index"); //登入權限
app.use("/login", loginRouter);
app.use("/", [auth.authJWT.verifyToken]);

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// port listened on 5000
app.listen(5001, () => {
  console.log("Server started run.");
});
