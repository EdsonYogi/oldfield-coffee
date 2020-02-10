<template>
  <div id="app">
    <transition-group mode="out-in">
      <Header key="header" />
      <router-view key="content" />
    </transition-group>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/normalize.css/normalize.css";
@import url("https://fonts.googleapis.com/css?family=Kanit&display=swap");

body {
  background-color: #4d4845;
  font-family: "Kanit", sans-serif;
  font-weight: lighter;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration-style: none;
}

a:hover {
  text-decoration: none;
}

.btn-oc {
  display: block;
  width: 200px;
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;
  background-color: #4d4845;
  color: white;
  transition-duration: 0.5s;
}

.btn-oc:hover {
  color: #fc9c72;
}

.v-enter,
.v-leave {
  transition: all ease 1s;
}
</style>