<template>
  <box-bg-white class="auth__wrap">
    <h1>Авторизация</h1>
    <input
      v-model="inputEmail"
      class="auth__input"
      type="text"
      placeholder="E-mail"
    />
    <input
      v-model="inputPassword"
      class="auth__input"
      type="password"
      placeholder="Пароль"
    />
    <div class="auth__bottom">
      <router-link class="auth__bottom__link" to="/registration"
        >Форма регистрации</router-link
      >
      <div @click="sendForm" class="btn-max">Войти</div>
    </div>
  </box-bg-white>
</template>

<script>
import api from "@/http/api.js";

export default {
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
    };
  },
  methods: {
    async sendForm() {
      try {
        const response = await api.post("/v1/user/login", {
          email: this.inputEmail,
          password: this.inputPassword,
        });
        if (response.data.code == "user-login") {
          localStorage.setItem(
            "jwtAccessToken",
            response.data.data.tokens.accessToken
          );
          this.$router.push("Home");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped></style>
