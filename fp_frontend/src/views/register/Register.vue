<template>
  <div class="container2" id="a">
    <!-- <button class="quickInsertBtn" type="button" v-if="showQuickBtn(3)">
      快速填入
    </button> -->
    <div v-if="showTitle(3)">
      <h2 class="title" style="color: rgb(213, 128, 237)">
        請完成個人基本資料
      </h2>

      <h5 class="title" style="color: yellow">*寫得越詳細配對機率就越高</h5>
    </div>

    <div class="userForm">
      <!-- 進度條 -->
      <div class="progressImg">
        <img src="../../style/images/one(1).png" />
        <img src="../../style/images/two.png" v-if="showPage(1)" />
        <img src="../../style/images/three(1).png" v-if="showPage(1)" />
        <img src="../../style/images/two(1).png" v-if="showPage(2)" />
        <img src="../../style/images/three(1).png" v-if="showPage(2)" />
      </div>

      <!-- 大頭照 -->
      <div class="userImg" id="userImg" v-show="showUserImage(1)">
        <!-- 大頭照預視，底下這張圖片會被替換 -->
        <i
          ><img
            name="avatar"
            id="avatar"
            :style="{ width: '300px', height: '200px' }"
            :src="avatar"
        /></i>

        <!-- 寫法A: 無法寫進資料庫 -->
        <!-- <input
          id="uppic"
          type="file"
          name="avatar"
          @change="onfile"
          accept="image/*"
        /> -->

        <!-- 寫法B:可以寫進資料庫，但無法跟表單所有資料一起傳送 -->
        <div class="upload">
          <input
            id="uppic"
            type="file"
            @change="changeImage($event)"
            ref="avatarInput"
            class="upload-box"
            accept="image/*"
          />
          <button class="selectnone uploadBtn" type="submit" @click="uploadBtn">
            <span class="checkSpan">提交</span>
            <svg
              class="check"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- page1 starts -->
      <form action="/user/register" method="POST" id="userForm">
        <div class="part1" id="part1" v-if="showPage(1)">
          <div class="userFormLeft">
            <div class="wrapper">
              <input
                required="required"
                type="text"
                id="email"
                name="email"
                v-model="userForm.email"
              />
              <label for="email" class="text">email</label>
            </div>
            <div class="wrapper">
              <input
                required="required"
                type="password"
                id="password"
                name="password"
                v-model="userForm.password"
              />
              <label for="password" class="text">password</label>
            </div>
            <div class="wrapper">
              <input
                required="required"
                type="text"
                id="nickName"
                name="nickName"
                v-model="userForm.nickName"
              />
              <label for="nickName" class="text">暱稱</label>
            </div>
            <div class="wrapper">
              <input
                required="required"
                type="date"
                id="birthday"
                name="birthday"
                v-model="userForm.birthday"
              />
            </div>
            <div class="radio-group">
              <label for="men" class="radio">
                <input
                  type="radio"
                  id="men"
                  name="gender"
                  value="M"
                  v-model="userForm.gender"
                />
                male
                <span></span>
              </label>
              <label for="female" class="radio">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="F"
                  v-model="userForm.gender"
                />
                female
                <span></span>
              </label>
            </div>
            <div class="select">
              <select name="city" id="city" v-model="userForm.city">
                <option value="" selected disabled>居住地</option>
                <!-- [ { "CityId": "CHW", "CityName": "彰化縣" }, { "CityId": "CYC", "CityName": "嘉義縣" }] -->
                <option
                  v-for="(city, key) in initConstant.city"
                  :value="city.CityId"
                  :key="key"
                >
                  {{ city.CityName }}
                </option>
                <!-- <option value="TPE">台北市</option>
                <option value="NPE">新北市</option>
                <option value="TYC">桃園市</option>
                <option value="TXG">台中市</option>
                <option value="TNN">台南市</option>
                <option value="KHH">高雄市</option>
                <option value="HSZ">新竹縣</option>
                <option value="ZMI">苗栗縣</option>
                <option value="CHW">彰化縣</option>
                <option value="KTC">南投縣</option>
                <option value="YUN">雲林縣</option>
                <option value="CHC">嘉義縣</option>
                <option value="PIF">屏東縣</option>
                <option value="ILA">宜蘭縣</option>
                <option value="HUN">花蓮縣</option>
                <option value="TTT">台東縣</option>
                <option value="PEH">澎湖縣</option>
                <option value="KNH">金門縣</option>
                <option value="LNN">連江縣</option>
                <option value="KLU">基隆市</option>
                <option value="HSC">新竹市</option>
                <option value="CHI">嘉義市</option> -->
              </select>
            </div>
            <div class="select">
              <select name="job" id="job" v-model="userForm.job">
                <option value="" selected disabled>職業</option>
                <option
                  v-for="(job, key) in initConstant.job"
                  :value="job.JobID"
                  :key="key"
                >
                  {{ job.JobName }}
                </option>
              </select>
            </div>
          </div>

          <div class="userFormRight">
            <div class="rightcenter">
              <input
                required="required"
                type="text"
                name="hobby"
                id="hobby"
                v-model="userForm.hobby"
                style="height: 200px; width: 300px; padding-top: 0px"
              />
              <label class="text" for="hobby">興趣</label>
            </div>
          </div>
        </div>
        <!-- page1 ends -->
        <!-- page2 starts -->

        <div
          class="part2"
          id="part2"
          v-if="showPage(2)"
          v-bind:class="[part2Class]"
        >
          <div class="userFormLeft">
            <div class="checkbox-group">
              <span>我想尋找(可複選):</span>
              <div class="round">
                <input
                  class="checkbox"
                  type="checkbox"
                  name="kind[]"
                  id="checkbox"
                  value="soulMate"
                  v-model="userForm.kind"
                />
                <label for="checkbox"></label>
                &nbsp;&nbsp;&nbsp;靈魂伴侶
              </div>
              <div class="round">
                <input
                  id="checkbox2"
                  class="checkbox"
                  type="checkbox"
                  name="kind[]"
                  value="friend"
                  v-model="userForm.kind"
                />
                <label for="checkbox2"></label>
                &nbsp;&nbsp;&nbsp;同好/朋友
              </div>
              <div class="round">
                <input
                  class="checkbox"
                  type="checkbox"
                  name="kind[]"
                  id="checkbox3"
                  value="need"
                  v-model="userForm.kind"
                />
                <label for="checkbox3"></label>
                &nbsp;&nbsp;&nbsp;各取所需
              </div>
              <div class="round">
                <input
                  class="checkbox"
                  type="checkbox"
                  name="kind[]"
                  id="checkbox4"
                  value="other"
                  v-model="userForm.kind"
                />
                <label for="checkbox4"></label>
                &nbsp;&nbsp;&nbsp;其他
              </div>
            </div>

            <br />
            <div class="wantPair checkbox-group">
              <label for="wantPair">我想認識(可複選): <br /></label>
              <div class="round">
                <input
                  type="checkbox"
                  name="wantPair[]"
                  id="kind1"
                  value="M"
                  v-model="userForm.wantPair"
                />
                <label for="kind1"></label>
                &nbsp;&nbsp;&nbsp;男生
              </div>
              <div class="round">
                <input
                  type="checkbox"
                  name="wantPair[]"
                  value="F"
                  id="kind2"
                  v-model="userForm.wantPair"
                />
                <label for="kind2"></label>
                &nbsp;&nbsp;&nbsp;女生
              </div>
            </div>
            <br />
            <div class="interest checkbox-group">
              <label for="activity">感興趣的活動(可複選): <br /></label>
              <div
                class="round"
                v-for="(element, index) in initConstant.activity"
              >
                <input
                  type="checkbox"
                  name="activitiy[]"
                  :value="element.ActivityId"
                  :id="'activity' + index"
                  v-model="userForm.activity"
                />
                &nbsp;&nbsp;&nbsp;{{ element.ActivityName }}
                <label :for="'activity' + index"></label>
              </div>
            </div>
          </div>
          <div class="userFormRight">
            <label for="introduction" style="color: #fff"
              >自我介紹:<br
            /></label>

            <input
              type="text"
              name="introduction"
              id="introduction"
              size="40"
              maxlength="40"
              v-model="userForm.introduction"
            /><span class="text-white"></span>
          </div>
          <!-- page2 ends -->
        </div>
      </form>
    </div>

    <div class="nextStep">
      <div v-on:click="previousStep()" v-show="showPreviousButton()">
        <i class="fa-2xs">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </i>
      </div>
      <div v-on:click="nextStep()" id="ok">
        <i class="fa-2xs">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </i>
      </div>
      <!-- <div id="finish" onclick="finish()">
                <i class="fa-solid fa-chevron-right"></i>
            </div> -->
    </div>
  </div>
  <!-- page3 starts -->
  <div class="container3" id="success" v-if="showPage(3)">
    <div>
      <h2 class="title">恭喜!你已成功註冊</h2>
    </div>

    <!-- 進度條 -->
    <div class="progressImg">
      <img src="../../style/images/one(1).png" />
      <img src="../../style/images/two(1).png" />
      <img src="../../style/images/three.png" />
    </div>

    <div class="memberImg" id="userImg">
      <img
        id="page3Img"
        :style="{ width: '300px', height: '200px' }"
        :src="avatar"
      />
    </div>

    <!-- <div class="signUp" id="signUp"> -->
    <div>
      <button class="btn transparent" id="returnIndex" @click="redirectBtn">
        回到首頁
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 當前預設頁面
      currentPage: 1,
      // 註冊表單
      userForm: {
        id: "",
        email: "",
        password: "",
        nickName: "",
        birthday: "",
        gender: "",
        city: "",
        job: "",
        hobby: "",
        wantPair: [],
        kind: [],
        activity: [],
        introduction: "",
        avatar: "",
      },

      // 大頭照
      avatar: require("../../style/images/circle-user-solid.svg"),
    };
  },

  methods: {
    // 大頭照上傳和預視

    // 寫法A:搭配32行
    // onfile(event) {
    //   this.file = event.target.files[0];
    //   let filereader = new FileReader();
    //   filereader.readAsDataURL(this.file);
    //   filereader.addEventListener("load", () => {
    //     this.avatar = filereader.result;
    //     console.warn(this.avatar);
    //   });
    // },

    // 寫法B:搭配41行
    changeImage(e) {
      // this.avatar = e.target.files[0];
      var file = e.target.files[0];
      var reader = new FileReader();
      var that = this;
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.avatar = e.target.result;
        // that.avatar = this.result;
      };
    },
    uploadBtn() {
      this.axios.post("/user/upload", { avatar: this.avatar }).then((res) => {
        // if (this.avater != null) {
        //   alert("上傳成功");
        // }
        console.log(res.data);
        this.userForm.id = res.data;
      });
    },

    nextStep() {
      if (this.currentPage == 2) {
        this.submit();
      } else {
        this.currentPage++;
      }
    },
    previousStep() {
      if (this.currentPage <= 1) {
      } else {
        this.currentPage -= 1;
      }
    },

    showPage(page) {
      return this.currentPage == page;
      console.log(2, result.data);
    },

    showPreviousButton(page) {
      return this.currentPage > 1;
    },
    showUserImage(page) {
      return this.currentPage == 1;
    },

    // 標題顯示與否:請完成個人基本資料*寫得越詳細配對機率就越高
    showTitle(page) {
      return this.currentPage != page;
    },
    // // 快速填入的按鈕
    // showQuickBtn(page) {
    //   return this.currentPage != page;
    // },
    async submit() {
      await this.axios
        .post("/user/register", this.userForm)
        .then((result) => {
          console.log(1, result);
          this.currentPage = 3;
        })
        .catch((err) => {
          throw err;
        });
    },
    redirectBtn() {
      return this.$router.push("/");
    },
  },
  mounted() {
    let testButton = () => {
      console.log(this);
      this.userForm = {
        email: "mfee240712@gmail.com",
        password: "20220727",
        nickName: "美美",
        birthday: "2002-07-27",
        gender: "F",
        city: "TXG",
        job: "student",
        hobby: "探索美食與料理、健身爬山",
        wantPair: ["M"],
        kind: ["friend", "soulMate", "need"],
        activity: ["food", "travel", "workout"],
        introduction: "希望能在這裡找到志同道合的朋友",
      };
    };
    document.onkeydown = function (e) {
      console.log(123);
      let key = window.event.key;

      if (key == "Enter") {
        console.log(456);

        testButton();
      }
    };
  },
  computed: {
    initConstant() {
      return this.$store.state.init.initConstant;
    },
  },
};
</script>

<style scoped lang="css" src="../../style/register.css"></style>
