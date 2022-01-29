<template>
  <component :is="layout"></component>
</template>

<script>
import MainLayout from "@/layouts/mainLayout.vue";
import AuthLayout from "@/layouts/authLayout.vue";
import NotFoundLayout from "@/layouts/notFoundLayout.vue";
export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  data() {
    return {};
  },
  components: {
    MainLayout,
    AuthLayout,
    NotFoundLayout,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap");

:root {
  --main-yellow-color: #fdda07;
  --main-black-color: #272727;
  --main-gray-color: #3a3a3a;
  --main-lightgray-color: #fcfcfc;
}

* {
  outline: none;
  scrollbar-width: auto;
  scrollbar-color: var(--main-yellow-color) var(--main-lightgray-color);
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: var(--main-lightgray-color);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--main-yellow-color);
  border-radius: 10px;
  border: 0px solid var(--main-lightgray-color);
}

body {
  color: var(--main-black-color);
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

input,
textarea {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: var(--main-gray-color);
}

h1 {
  margin: 0;
}

.btn-max {
  background: var(--main-yellow-color);
  box-shadow: 0px 0px 15px rgb(0 0 0 / 15%);
  border-radius: 10px;
  color: #fff !important;
  padding: 15px 20px;
  font-weight: 900;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}

.btn-max img {
  margin-right: 15px;
}

#app {
}
</style>
