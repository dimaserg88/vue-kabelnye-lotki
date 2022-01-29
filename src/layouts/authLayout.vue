<template>
  <div class="auth">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.auth {
  height: 100vh;
  background: var(--main-lightgray-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth__wrap {
  width: 100%;
  max-width: 400px;
}

.auth h1 {
  margin-bottom: 30px;
  text-align: center;
}

.auth__input {
  padding: 20px;
  border-radius: 10px;
  width: calc(100% - 40px);
  border: 1px solid var(--main-lightgray-color);
  margin-bottom: 10px;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 5%);
}

.auth__bottom {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
}

.auth__bottom__link {
  font-size: 14px;
  text-decoration: none;
  color: inherit;
  margin-top: 20px;
}
</style>
