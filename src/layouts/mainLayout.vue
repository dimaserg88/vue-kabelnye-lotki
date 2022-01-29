<template>
  <Header
    v-if="windowSize < 767.98"
    @clickNavBtn="navOpened = !navOpened"
    :navOpened="navOpened"
  />
  <Nav @clickLink="navOpened = false" :navOpened="navOpened" />
  <div id="content">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
export default {
  data() {
    return {
      windowSize: null,
      navOpened: false,
    };
  },
  components: {
    Header,
    Nav,
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
#content {
  margin-left: calc(325px - 20px);
  padding: 20px;
}

@media (max-width: 991.98px) {
  #content {
    margin-left: calc(275px - 20px);
  }
}
@media (max-width: 767.98px) {
  #content {
    margin-left: 0;
  }
}
</style>
