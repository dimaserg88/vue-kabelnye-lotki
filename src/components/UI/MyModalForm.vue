<template>
  <div id="form">
    <div class="form__title">{{ title }}</div>
    <div class="form__text">{{ text }}</div>
    <input
      class="form__inputText"
      v-model="formFields.title"
      placeholder="Тема обращения"
    />
    <textarea
      class="form__inputTextarea"
      v-model="formFields.text"
      placeholder="Ваше обращение"
    />
    <a class="btn-max" href="#" @click.prevent="submit">Отправить</a>
  </div>
</template>

<script>
export default {
  name: "my-modal-form",
  props: ["title", "text", "code"],
  data() {
    return {
      formFields: {
        code: this.code,
      },
    };
  },
  methods: {
    submit() {
      console.log("АХУЕННО", this.formFields);
    },
  },
};
</script>

<style scoped>
#form {
}
.form__title {
  font-size: 20px;
  font-weight: 700;
}
.form__text {
  margin-top: 10px;
  margin-bottom: 30px;
}
.form__inputText {
  border: 1px solid #ededed;
  border-radius: 10px;
  padding: 10px;
  width: calc(100% - 20px);
}
.form__inputTextarea {
  border: 1px solid #ededed;
  border-radius: 10px;
  padding: 10px;
  width: calc(100% - 20px);
  resize: none;
  height: 90px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
