<template>
  <transition name="fade">
    <div class="popup" v-if="show">
      <div class="popup__overlay" @click="hideModal"></div>
      <div class="popup__content">
        <div class="popup__text">
          <slot></slot>
        </div>
        <div class="popup__close" @click="hideModal">x</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup__overlay {
  background: #ffffffb8;
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
}

.popup__content {
  max-width: 350px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 0px 30px rgb(0 0 0 / 5%);
  margin: 10px;
}

.popup__close {
  font-size: 40px;
  position: absolute;
  top: -50px;
  right: 0;
  color: var(--main-yellow-color);
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
