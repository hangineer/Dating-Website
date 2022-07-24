<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import _ from "lodash";
import { init } from "events";

export default {
  name: "app",
  data() {},
  mounted() {
    this.axios.get("/init/initConstant").then((response) => {
      console.log(response.data);
      let configMaps = {
        activity: response.data.activity,
        city: response.data.city,
        gender: response.data.gender,
        job: response.data.job,
        purpose: response.data.purpose,
        cityMap: {},
        activityMap: {},
        genderMap: {},
        jobMap: {},
      };
      response.data.city.forEach((city) => {
        configMaps.cityMap[city.CityId] = city.CityName;
      });
      response.data.activity.forEach((activity) => {
        configMaps.activityMap[activity.ActivityId] = activity.ActivityName;
      });
      response.data.gender.forEach((gender) => {
        configMaps.genderMap[gender.GenderId] = gender.Gender;
      });
      response.data.job.forEach((job) => {
        configMaps.jobMap[job.JobID] = job.JobName;
      });
      console.log(configMaps);
      this.$store.commit("init/setInit", configMaps);
    });
  },
  destroyed() {
    // localStorage.clear();
  },
  unmounted() {
    // localStorage.clear();
  },
};

// Lifecycle hooks are called at different stages
// of a component's lifecycle.
// This function will be called when the component is mounted.
</script>
<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template> -->

<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
