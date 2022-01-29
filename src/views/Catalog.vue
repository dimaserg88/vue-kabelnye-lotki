<template>
  <div class="catalog">
    <h1>Каталог</h1>
  </div>
</template>

<script>
import api from "@/http/api.js";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    api
      .get("/v1/user/current")
      .then((response) => {})
      .catch((e) => {});
  },
};
</script>
