<template>
  <div class="home">
    <div class="grid">
      <box-bg-white class="one">
        <div class="title">Здравствуйте,</div>
        <div class="name">Дмитрий Сергеевич</div>
        <div class="skidka">Ваша скидка 15%</div>
        <div class="btn-max">Увеличить скидку</div>
      </box-bg-white>
      <box-bg-white class="two">
        <div class="title">Сумма покупок</div>
        <div class="total">15 563 211 <span>₽</span></div>
        <div class="text"></div>
      </box-bg-white>
      <box-bg-white class="free">
        <div @click="$store.commit('userModule/INCREMENT_LIKES')">
          ДОБАВИТЬ ЛАЙК
        </div>
        {{ $store.getters["userModule/GET_LIKES"] }}<br />
        {{ $store.state.userModule.isAuth }}
      </box-bg-white>
      <box-bg-white class="four">
        <div class="title">Здравствуйте</div>
      </box-bg-white>
      <box-bg-white class="five">
        <div class="title">Здравствуйте</div>
      </box-bg-white>
      <box-bg-white class="six">
        <div class="title">Здравствуйте</div>
      </box-bg-white>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.grid {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1.4fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px 25px;
  grid-template-areas:
    "one two free"
    "four four five";
}
.one {
  grid-area: one;
}
.two {
  grid-area: two;
}
.free {
  grid-area: free;
}
.four {
  grid-area: four;
}
.five {
  grid-area: five;
}

.title {
  margin-bottom: 10px;
}

.text {
  font-size: 14px;
}

.one .name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
}

.one .skidka {
  color: var(--main-yellow-color);
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
}

.two .total {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
}

.two .total span {
  color: var(--main-yellow-color);
}
</style>
