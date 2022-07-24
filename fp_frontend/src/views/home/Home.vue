<template>
  <div id="animate-area">
    <div id="star">
      <!-- LOGO -->
      <img id="logo" src="../../style/images/IMG_6204.gif" />
      <!-- <div class="d-flex justify-content-end logout">
        <span>{{ nickName }}</span>
      </div> -->
      <!-- 登入與註冊 -->
      <button class="logoutBtn" v-on:click="logout">logout</button>
      <a href="/login">
        <img
          id="login"
          :src="login"
          @mouseover="loginHover = true"
          @mouseleave="loginHover = false"
        />
      </a>

      <!-- 會員專區 -->
      <a href="/personalFile">
        <img
          id="members"
          :src="member"
          @mouseover="memberHover = true"
          @mouseleave="memberHover = false"
      /></a>

      <!-- 關於我們 -->
      <a href="">
        <img
          id="aboutUs"
          :src="aboutUs"
          @mouseover="aboutUsHover = true"
          @mouseleave="aboutUsHover = false"
        />
      </a>
      <!-- 活動 -->
      <a href="">
        <img
          id="active"
          :src="activity"
          @mouseover="activityHover = true"
          @mouseleave="activityHover = false"
        />
      </a>

      <!-- 配對 -->
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
</template>
<script>
import authService from "@/auth/auth.service";

export default {
  data() {
    return {
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
      nickName: "",
    };
  },
  methods: {
    isLoad() {
      console.log("資料加載完畢");
    },
    logout() {
      // this.$store.commit('init/setInit')
      // console.log(this.$store.state.init)
      // this.$store.commit('increment')
      // this.$store.commit('init/setInit',{test:'help'})
      authService.logout();
      alert("登出成功");
    },
  },
  computed: {
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
  },
  mounted() {},
};
</script>

<style scoped lang="css" src="../../style/home.css"></style>
