<template>
  <div id="header">
    <div
      class="header__nav-btn"
      :class="{ open: navOpened }"
      @click="$emit('clickNavBtn')"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["navOpened"],
  emits: ["clickNavBtn"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
#header {
  background-color: var(--main-lightgray-color);
  padding: 20px;
}

.header__nav-btn {
  width: 40px;
  height: 30px;
  position: relative;
  margin-left: auto;
  cursor: pointer;
}

.header__nav-btn span {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: var(--main-gray-color);
  border-radius: 10px;
  transition: 0.5s;
}

.header__nav-btn span:nth-child(1) {
  top: 0;
}

.header__nav-btn span:nth-child(2) {
  top: calc(50% - 2px);
  width: 80%;
  right: 0;
}

.header__nav-btn span:nth-child(3) {
  bottom: 0;
}

.header__nav-btn.open span:nth-child(1) {
  transform: rotate(-45deg);
  top: 13px;
}

.header__nav-btn.open span:nth-child(2) {
  opacity: 0;
}

.header__nav-btn.open span:nth-child(3) {
  transform: rotate(45deg);
  top: 13px;
}
</style>
