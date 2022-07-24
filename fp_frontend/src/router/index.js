import { createRouter, createWebHistory } from "vue-router";

// 首頁
import Home from "../views/home/Home";

// 註冊
import Register from "../views/register/Register";

// 登入
import Login from "../views/login/Login";

// 個人頁面
import PersonalFile from "../views/memberFile/PersonalFile";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { title: "Home Page" },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { title: "Register Page" },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { title: "Login Page" },
  },
  {
    path: "/personalFile",
    name: "personalFile",
    component: PersonalFile,
    meta: { title: "Personal File" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //check if login
  let user = JSON.parse(localStorage.getItem("user"));

  let login = false;

  if (user != null && user.accessToken != null) {
    login = true;
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  if (!login) {
    console.log("Not login");
    if (to.path != "/login" && to.path != "/register" && to.path != "/") {
      console.log("Redirect");
      next("/login");
    } else {
      console.log("No redirect");
      next();
    }
  } else {
    console.log("Login");
    next();
  }
});

export default router;
