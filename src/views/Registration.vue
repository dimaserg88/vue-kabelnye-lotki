<template>
  <box-bg-white class="auth__wrap">
    <h1>Регистрация</h1>
    <input
      v-model="inputName"
      class="auth__input"
      type="text"
      placeholder="Имя"
    />
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
      <router-link class="auth__bottom__link" to="/login"
        >Форма входа</router-link
      >
      <div @click="sendForm" class="btn-max">Зарегистрироваться</div>
    </div>
  </box-bg-white>
</template>

<script>
import api from "@/http/api.js";

export default {
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputPassword: "",
    };
  },
  methods: {
    async sendForm() {
      try {
        const response = await api.post("/v1/user/registration", {
          name: this.inputName,
          email: this.inputEmail,
          password: this.inputPassword,
        });
        if (response.data.code == "user-created") {
          localStorage.setItem(
            "jwtAccessToken",
            response.data.data.tokens.accessToken
          );
          this.$router.push("Home");
        }
      } catch (e) {
        //not-valid-email
        //not-valid-password
        //not-valid-namesurname
        //not-valid-password-length-min
        //user-created
        console.log(e.response.data.response);
      }
    },
  },
};
</script>

<style scoped></style>
