<template>
  <!-- <div>{{initConstant}}</div> -->
  <div class="container">
    <div id="pfstar"></div>
    <!-- hamburger -->
    <input type="checkbox" id="active" />
    <label for="active" class="menu-btn">
      <div v-on:click="collapsed = !collapsed">
        <font-awesome-icon :icon="['fas', collapsed ? 'fa-house' : 'fa-x']" />
      </div>
    </label>
    <div class="wrapper">
      <div id="animate-area">
        <div id="star">
          <button class="logoutBtn" v-on:click="logout">logout</button>
          <a href="/login">
            <img
              id="login"
              :src="login"
              @mouseover="loginHover = true"
              @mouseleave="loginHover = false"
            />
          </a>
          <a href="/personalFile">
            <img
              id="members"
              :src="member"
              @mouseover="memberHover = true"
              @mouseleave="memberHover = false"
          /></a>
          <img id="logo" src="../../style/images/IMG_6204.gif" />
          <a href="">
            <img
              id="aboutUs"
              :src="aboutUs"
              @mouseover="aboutUsHover = true"
              @mouseleave="aboutUsHover = false"
            />
          </a>

          <a href="">
            <img
              id="active"
              :src="activity"
              @mouseover="activityHover = true"
              @mouseleave="activityHover = false"
            />
          </a>
          <a href=""
            ><img
              id="match"
              :src="match"
              @mouseover="matchHover = true"
              @mouseleave="matchHover = false"
            />
          </a>
        </div>
      </div>
    </div>

    <!-- background image -->

    <div class="mainbackImg">
      <img src="../../style/images/S__56426498.png" />
    </div>
    <div class="mainPagebtn">
      <!-- <button id="myProfileBtn" class="pageBtn">
        <font-awesome-icon :icon="['fas', 'fa-user']" />
    
      </button>
      <button id="myCommentBtn" class="pageBtn">
        <font-awesome-icon :icon="['fas', 'fa-message']" />
      
      </button>
      <button id="myPhotoBtn" class="pageBtn">
        <font-awesome-icon :icon="['fas', 'fa-image']" />
        
      </button> -->
    </div>

    <!-- pngMachine-->
    <div class="backBox">
      <div class="tabandIcon" id="ShowPage1">
        <!-- main Tab -->
        <div id="mainTab">
          <ul class="tab-list clearfloat">
            <li class="tab-itom">
              <input
                type="radio"
                id="testTabRadio8"
                class="test-radio"
                name="tab3"
                checked="checked"
              />
              <!--Personal file starts  -->
              <label
                class="test-label"
                for="testTabRadio8"
                style="display: none"
                >個人檔案</label
              >

              <!-- userinfoPage1 -->
              <div class="tab-box">
                <div
                  class="userinfoBox"
                  id="userinfoPage1"
                  v-show="showPage(1)"
                >
                  <button id="editIcon" @click="editBtnVue">
                    <font-awesome-icon :icon="['fas', 'fa-pen-to-square']" />

                    <!-- <i class="fa-solid fa-pen-to-square"></i> -->
                  </button>
                  <!-- <form action="/user/personalFile" method="GET"> -->
                  <div class="userinfoTitle">
                    <div class="titleTop">
                      <!-- userimage&info -->
                      <div class="titletopInside">
                        <div id="userImage">
                          <img :src="avatar" />
                        </div>
                        <div class="titleBottom">
                          <div>
                            <span name="nickName" id="nameGender">{{
                              nickName
                            }}</span>
                            <font-awesome-icon :icon="['fas', 'fa-venus']" />
                            <!-- <i
                            class="fa-solid fa-venus genderItem"
                            style="color: white"
                          ></i> -->
                          </div>

                          <div>
                            <span name="memid" id="userId"
                              >@user{{ memid }}</span
                            >
                          </div>
                          <div>
                            <span name="city" id="userAdd"
                              >{{ getCityDisplayName(city) }}&nbsp;</span
                            >
                            <span name="age" id="userAge"> {{ Age }}歲</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- birth&interest -->
                    <div class="titleRight">
                      <div class="titlerightBox">
                        <div class="rightBoxone">
                          <div class="birthBox">
                            <span>生日</span>
                            <br />
                            <span name="birthday" id="userBirth">{{
                              birthday
                            }}</span>
                          </div>
                          <div class="zodiacBox">
                            <span>性別</span>
                            <br />
                            <span name="gender">{{
                              getGenderDisplayName(gender)
                            }}</span>
                            <!-- <span>星座</span>
                            <br />
                            <span id="userZodiac">金牛座</span> -->
                          </div>
                          <div class="jobBox">
                            <span>職業</span>
                            <br />
                            <span id="userJob" name="job">{{
                              getJobDisplayName(job)
                            }}</span>
                          </div>
                        </div>
                        <div class="rightBoxtwo">
                          <span>興趣</span>
                          <br />
                          <span name="introduction" id="userInterest"
                            >{{ hobby }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="activityLike">
                    <div class="activitylikeBox">
                      <div id="interestIcon">
                        <span
                          class="iconify"
                          data-icon="ic:baseline-interests"
                        ></span>
                      </div>
                      <div class="interestContent">
                        <span class="interTitle">感興趣的活動</span>
                        <br />
                        <div id="useractivityLike">
                          <!-- [ 
                          { "MemId": 21, "ActivityName": "business" }, 
                          {"MemId": 21, "ActivityName": "game" }, 
                          { "MemId": 21,"ActivityName": "other" } ] -->
                          <span
                            name="activity[]"
                            v-for="element in this.activity"
                            >{{
                              getActivityDisplayName(element.ActivityName)
                            }}&nbsp;</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- selfintroduction -->
                  <div class="selfintroduction">
                    <div class="selfintroductionBox">
                      <span id="selfTitle">自我介紹</span>
                      <article name="introduction" id="userSelfintroduction">
                        {{ introduction }}
                      </article>
                    </div>
                  </div>
                  <!-- </form> -->
                </div>

                <!-- 編輯頁面 userinfoPage2 -->
                <div class="editBox" id="userinfoPage2" v-show="showPage(2)">
                  <div class="editTitle">
                    <h1>編輯個人資料</h1>
                  </div>
                  <div class="chooseImg">
                    <div
                      class="profile-pic-div"
                      @mouseenter="appear = true"
                      @mouseleave="appear = false"
                    >
                      <!-- <img name="avatar" id="photo" /> -->
                      <img :src="avatar" id="photo" />
                      <input
                        type="file"
                        id="file"
                        @change="chooseFile($event)"
                      />

                      <label id="uploadBtn" for="file" v-if="appear">
                        choose Photo
                      </label>
                    </div>
                  </div>

                  <!-- <form action="/user/editInfo" method="PUT"> -->
                  <div class="editBox2">
                    <div>
                      <label>暱稱<span style="color: red">*</span></label>
                    </div>
                    <div>
                      <input
                        autocomplete="off"
                        class="input"
                        type="text"
                        placeholder="請輸入您的暱稱"
                        name="nickName"
                        v-model="this.nickName"
                      />
                    </div>
                    <div>
                      <label>所在地區<span style="color: red">*</span></label>
                    </div>
                    <div>
                      <select name="city" v-model="this.city">
                        <option
                          v-for="(city, key) in initConstant.city"
                          :value="city.CityId"
                          :key="key"
                        >
                          {{ city.CityName }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label for="birthday"
                        >生日（不公開資訊,可修改乙次）<span style="color: red"
                          >*</span
                        ></label
                      >
                    </div>
                    <div>
                      <input
                        disabled
                        type="date"
                        id="birthday"
                        name="birthday"
                        v-model="this.birthday"
                      />
                    </div>
                    <div>
                      <label>性別<span style="color: red">*</span></label>
                    </div>
                    <div>
                      <select name="gender" v-model="this.gender" disabled>
                        <option
                          v-for="gender in initConstant.gender"
                          :value="gender.GenderId"
                        >
                          {{ gender.Gender }}
                        </option>
                        <!-- <option value="M">男性</option>
                        <option value="F">女性</option> -->
                      </select>
                    </div>

                    <div>
                      <label>職務<span style="color: red">*</span></label>
                    </div>

                    <div>
                      <select name="job" v-model="this.job">
                        <option
                          v-for="job in initConstant.job"
                          :value="job.JobID"
                        >
                          {{ job.JobName }}
                        </option>
                      </select>
                    </div>

                    <div>
                      <label>興趣<span style="color: red">*</span></label>
                    </div>
                    <div>
                      <input name="hobby" v-model="this.hobby" />
                    </div>

                    <div>
                      <label
                        >選擇感興趣的聚會<span style="color: red"
                          >*</span
                        ></label
                      >
                    </div>

                    <!-- 加上select表示預設 -->
                    <div style="width: 210px">
                      <!-- <select id="likeTab"> -->
                      <div v-for="(element, index) in initConstant.activity">
                        <input
                          type="checkbox"
                          :value="element.ActivityId"
                          v-on:input="addSelectedActivity(element.ActivityId)"
                          :checked="activityCheck(element.ActivityId)"
                        />
                        {{ element.ActivityName }}
                      </div>
                    </div>

                    <div>
                      <label>自我介紹<span style="color: red">*</span></label>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="introduction"
                        style="width: 400px; height: 300px"
                        v-model="this.introduction"
                      />
                      <!-- <textarea
                        placeholder="請填寫自我介紹"
                        name="introduction"
                        style="width: 400px; height: 300px"
                        >{{ Introduction }}</textarea
                      > -->
                    </div>

                    <div>
                      <button
                        class="editBtn"
                        id="backuserInfo"
                        @click="cancelBtn"
                      >
                        取消
                      </button>
                      <button type="submit" class="editBtn" @click="updateBtn">
                        更新
                      </button>
                    </div>
                  </div>
                  <!-- </form> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--Personal file ends -->

      <!-- my comment -->
      <div class="tabandIcon" id="ShowPage3" style="display: none">
        <div id="mainTab">
          <ul class="tab-list clearfloat">
            <li class="tab-itom">
              <input
                type="radio"
                id="testTabRadio5"
                class="test-radio"
                name="tab2"
                checked="checked"
              />
              <label
                class="test-label"
                for="testTabRadio5"
                style="display: none"
                >好友留言</label
              >
              <div class="tab-box">
                <div class="commentContainer">
                  <div id="fullpage">
                    <div class="speech-bubble">
                      <img
                        id="commentuserImg"
                        src="../../style/images/profile4.jpg"
                        alt=""
                      />
                      <span class="nick">Amy says:</span>

                      <p class="message">
                        &nbsp;&nbsp;&nbsp;主持人很會帶領氣氛!下次還要參加!
                      </p>
                      <div class="commenTitle-3">
                        <div id="comment_date">評論日期<span></span></div>
                        <button class="deleteme">刪除留言</button>
                      </div>
                    </div>

                    <div class="speech-bubble">
                      <img
                        id="commentuserImg"
                        src="../../style/images/profile4.jpg"
                        alt=""
                      />
                      <span class="nick">Amy says:</span>
                      <p class="message">
                        &nbsp;&nbsp;&nbsp;主持人很會帶領氣氛!下次還要參加!
                      </p>
                      <div class="commenTitle-3">
                        <div id="comment_date">評論日期</div>
                        <button class="deleteme">刪除留言</button>
                      </div>
                    </div>

                    <div class="speech-bubble">
                      <img
                        id="commentuserImg"
                        src="../../style/images/profile4.jpg"
                        alt=""
                      />
                      <span class="nick">Amy says:</span>
                      <p class="message">
                        &nbsp;&nbsp;&nbsp;主持人很會帶領氣氛!下次還要參加!
                      </p>
                      <div class="commenTitle-3">
                        <div id="comment_date">評論日期</div>
                        <button class="deleteme">刪除留言</button>
                      </div>
                    </div>
                    <div class="speech-bubble">
                      <img
                        id="commentuserImg"
                        src="../../style/images/profile4.jpg"
                        alt=""
                      />
                      <span class="nick">Amy says:</span>
                      <p class="message">
                        &nbsp;&nbsp;&nbsp;主持人很會帶領氣氛!下次還要參加!
                      </p>

                      <div class="commenTitle-3">
                        <div id="comment_date">評論日期</div>
                        <button class="deleteme">刪除留言</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- myphoto -->

      <div class="tabandIcon" id="ShowPage5" style="display: none">
        <div id="mainTab">
          <ul class="tab-list clearfloat">
            <li class="tab-itom">
              <input
                type="radio"
                id="testTabRadio14"
                class="test-radio"
                name="tab5"
                checked="checked"
              />
              <label
                class="test-label"
                for="testTabRadio14"
                style="display: none"
                >活動照片</label
              >
              <div class="tab-box">
                <div
                  class="uploadimgBox"
                  id="uploadimgBox"
                  style="display: flex"
                >
                  <h1>上傳照片</h1>
                  <div class="uploadimg">
                    <form action="">
                      <input class="imgName" type="file" name="image" />
                      <br />
                      <input class="uploadBtn" type="submit" value="上傳" />
                    </form>
                  </div>
                </div>

                <div
                  class="photoOverlay"
                  id="photoOverlay1"
                  style="display: none"
                >
                  <div class="photoPopup">
                    <div onclick="closephoto1()" class="closePhotoIcon">
                      &#10006;
                    </div>
                    <div class="photoideaBox">
                      <div class="myPhoto">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="privatePhotobox" id="privatePhotobox">
                  <div class="photo-album">
                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          onclick="openphoto1()"
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>

                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>
                    <div class="photo-frame">
                      <div class="photo">
                        <!-- <img
                          src="../../style/images/unsplash_jWv1ILisuSc (1).png"
                          alt=""
                        /> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- <script src="./profileedit.js"></script>
        <script src="./iconic-multiselect-dev/dist/multi-select-min.js"></script>
        <script src="./iconic-multiselect-dev/dist/multi-select.js"></script>
        -->
    </div>
  </div>
</template>

<script>
// import axios, { AxiosError } from "axios";

import authService from "@/auth/auth.service";
import authHeader from "@/auth/auth.header";
import _ from "lodash";
export default {
  data() {
    return {
      // 右上角的房子icon
      collapsed: true,
      // 初始預設
      currentPage: 1,
      // 首頁
      loginMouseOver: require("../../style/images/IMG_6183.png"),
      loginMouseLeave: require("../../style/images/IMG_6184.png"),
      memberMouseOver: require("../../style/images/IMG_6186.png"),
      memberMouseLeave: require("../../style/images/IMG_6185.png"),
      aboutUsMouseOver: require("../../style/images/IMG_6178.png"),
      aboutUsMouseLeave: require("../../style/images/IMG_6177.png"),
      activityMouseOver: require("../../style/images/IMG_6176.png"),
      activityMouseLeave: require("../../style/images/IMG_6175.png"),
      matchMouseOver: require("../../style/images/IMG_6171.png"),
      matchMouseLeave: require("../../style/images/IMG_6189.png"),
      loginHover: false,
      memberHover: false,
      aboutUsHover: false,
      activityHover: false,
      matchHover: false,

      // 編輯大頭照
      avatar: "",
      // avatar: require("../../style/images/profile1.jpg"),
      appear: false,
      choosePhoto: "",

      // 資料顯示，下面若註解，資料就顯示不出來，不確定原因
      nickName: this.NickName,
      Age: this.Age,
      array: this.array,
      city: "",
      activity: [],
      selectdActivity: [],
      introduction: "",
      // avatar: "",
    };
  },
  methods: {
    refresh() {
      let user = JSON.parse(localStorage.getItem("user"));
      let id = user.id;
      this.id = user.id;
      this.axios
        .get("/user/getUserInfo", {
          params: { id: id },
        })
        .then((result) => {
          console.log(result);
          this.nickName = result.data.NickName;
          this.memid = result.data.MemID;
          this.city = result.data.CityId;
          this.birthday = result.data.Birthday;
          this.job = result.data.Job;
          this.gender = result.data.Gender;
          this.hobby = result.data.Interest;
          this.introduction = result.data.Introduction;
          this.Age = result.data.Age;
          this.activity = result.data.FavoriteActivity;
          this.selectdActivity = this.activity.map(
            (element) => element.ActivityName
          );
        })
        .catch((err) => {
          throw err;
        });

      this.axios
        .get("/user/getUserAvatar", {
          params: { id: id },
          responseType: "string",
        })
        .then((result) => {
          this.avatar = result.data[0].Avatar.replace(/[\r\n]/g, "");
          console.log(this.avatar);
        })
        .catch((err) => {
          throw err;
        });
    },

    // 登出按鈕
    logout() {
      authService.logout();
      alert("登出成功");
    },
    showPage(page) {
      return this.currentPage == page;
    },

    // currentPage 1的編輯按鈕
    editBtnVue() {
      return (this.currentPage = 2);
    },

    // currentPage 2的取消按鈕
    cancelBtn() {
      return (this.currentPage = 1);
    },

    // currentPage 2編輯頁面的提交按鈕
    updateBtn() {
      this.axios
        .post("/user/editInfo", {
          id: this.id,
          nickName: this.nickName,
          city: this.city,
          birthday: this.birthday,
          job: this.job,
          gender: this.gender,
          hobby: this.hobby,
          activity: this.selectdActivity,
          introduction: this.introduction,
          // avatar: this.avatar,
        })
        .then((res) => {
          this.refresh();
        })
        .catch((err) => {
          alert(err.data.message);
        });
      return (this.currentPage = 1);
      location.reload();
    },
    chooseFile(e) {
      console.log(e);
      var file = e.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.avatar = this.result;
      };
    },
    getActivityDisplayName(value) {
      return this.$store.state.init.initConstant.activityMap[value];
    },
    getCityDisplayName(value) {
      return this.$store.state.init.initConstant.cityMap[value];
    },
    getGenderDisplayName(value) {
      return this.$store.state.init.initConstant.genderMap[value];
    },
    getJobDisplayName(value) {
      return this.$store.state.init.initConstant.jobMap[value];
    },
    activityCheck(activityId) {
      if (_.find(this.activity, { ActivityName: activityId })) {
        return true;
      } else {
        return false;
      }
    },
    addSelectedActivity(activityElement) {
      // console.log(this.selectdActivity)
      if (this.selectdActivity.indexOf(activityElement) > -1) {
        _.remove(this.selectdActivity, (act) => {
          return act == activityElement;
        });
      } else {
        this.selectdActivity.push(activityElement);
      }
    },
  },
  computed: {
    // 首頁
    login() {
      if (this.loginHover == true) {
        return this.loginMouseLeave;
      } else {
        return this.loginMouseOver;
      }
    },
    member() {
      if (this.memberHover == true) {
        return this.memberMouseOver;
      } else {
        return this.memberMouseLeave;
      }
    },
    aboutUs() {
      if (this.aboutUsHover == true) {
        return this.aboutUsMouseOver;
      } else {
        return this.aboutUsMouseLeave;
      }
    },
    activity() {
      if (this.activityHover == true) {
        return this.activityMouseOver;
      } else {
        return this.activityMouseLeave;
      }
    },
    match() {
      if (this.matchHover == true) {
        return this.matchMouseOver;
      } else {
        return this.matchMouseLeave;
      }
    },
    initConstant() {
      return this.$store.state.init.initConstant;
    },
    getActivity() {
      return (value) => {
        return this.$store.state.init.initConstant.activityMap;
      };
    },
  },
  mounted() {
    // 取得「member」和「favorite_activity」資料表的內容並顯示
    // 取得登入者的MemID
    this.refresh();
  },
};
</script>

<!-- <style scoped lang="css" src="../../style/activityphoto新版.css"></style> -->
<!-- <style scoped lang="css" src="../../style/home.css"></style> -->
<!-- <style scoped lang="css" src="../../style/mycomment.css"></style> -->
<style scoped lang="css" src="../../style/hambuger.css"></style>
<style scoped lang="css" src="../../style/pngMachinestyle.css"></style>
<style scoped lang="css" src="../../style/profileedit.css"></style>
<style scoped lang="css" src="../../style/personalfilestyle.css"></style>
