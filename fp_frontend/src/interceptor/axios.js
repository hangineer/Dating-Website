import Vue from "vue";
import axios from "axios";

const BASE_URL = 'http://localhost:5000'
const errorHandle = (status, msg) => {
  //TODO
  if (status == 401) {
    alert("Not Authorized");
  }
};
let user = JSON.parse(localStorage.getItem("user"));
axios.interceptors.request.use(
  (request) => {
    if (user && user.accessToken) {
      request.headers["x-access-token"] = user.accessToken;
    }
    request.url = BASE_URL+request.url
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // alert(error.response.data.message);
    return Promise.reject(error);
  }
);

export default axios;
