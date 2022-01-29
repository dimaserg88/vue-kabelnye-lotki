<template>
  <div id="nav" :class="{ open: navOpened }">
    <div class="nav__wrap">
      <div class="user">
        <img
          class="user__avatar"
          src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png"
        />
        <div class="user__meta">
          <div class="user__name">Дмитрий Сергеевичевич</div>
          <div class="user__status">не подтвержден</div>
        </div>
      </div>
      <router-link @click="$emit('clickLink')" class="link" to="/">
        <img src="@/assets/icons/home.svg" />Главная
      </router-link>
      <router-link @click="$emit('clickLink')" class="link" to="/companys">
        <img src="@/assets/icons/cubic.svg" />Мои компании
      </router-link>
      <router-link @click="$emit('clickLink')" class="link" to="/orders">
        <img src="@/assets/icons/orders.svg" />Мои заказы
      </router-link>
      <router-link @click="$emit('clickLink')" class="link" to="/catalog">
        <img src="@/assets/icons/catalog.svg" />Каталог
      </router-link>
      <router-link @click="$emit('clickLink')" class="link" to="/profile">
        <img src="@/assets/icons/profile.svg" />Профиль
      </router-link>
      <div class="title">Связаться</div>
      <a @click="sendMailIt" href="#" class="link">
        <img src="@/assets/icons/mail.svg" />IT отдел
      </a>
      <a
        @click="sendMailManager"
        href="#"
        class="link"
        style="margin-bottom: 0"
      >
        <img src="@/assets/icons/mail.svg" />Менеджер
      </a>
    </div>
    <router-link @click="$emit('clickLink')" to="/" class="logo">
      Кабельные <span>лотки</span>
    </router-link>
  </div>
  <my-modal v-model:show="modalVisibleIt">
    <my-modal-form
      code="it"
      title="Связь с IT отделом"
      text="Расскажите что у Вас случилось, или поделитесь идеей по доработке сервиса"
  /></my-modal>
  <my-modal v-model:show="modalVisibleManager"
    ><my-modal-form
      code="manager"
      title="Связь с менеджером"
      text="Вы можете задать абсолютно любой вопрос, менеджер всегда поможет"
  /></my-modal>
</template>

<script>
export default {
  props: ["navOpened"],
  emits: ["clickLink"],
  data() {
    return {
      modalVisibleIt: false,
      modalVisibleManager: false,
    };
  },
  methods: {
    sendMailIt() {
      this.modalVisibleIt = true;
    },
    sendMailManager() {
      this.modalVisibleManager = true;
    },
  },
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 250px;
  width: 100%;
  height: calc(100% - 80px);
  background-color: var(--main-black-color);
  padding: 40px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: 0.5s;
}

#nav.open {
  left: 0;
}

.nav__wrap {
}

.user {
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--main-gray-color);
}

.user__avatar {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 100px;
}

.user__meta {
  margin-left: 15px;
}

.user__name {
  color: white;
  font-weight: 700;
}

.user__status {
  color: white;
  font-size: 12px;
  margin-top: 5px;
}

#nav .link {
  color: white;
  display: block;
  text-decoration: none;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  transition: 0.5s;
}

#nav .link img {
  margin-right: 20px;
}

#nav .link:hover {
  background-color: var(--main-gray-color);
}

#nav .link.router-link-exact-active {
  background-color: var(--main-yellow-color);
}

.title {
  color: var(--main-gray-color);
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 30px;
}

.logo {
  margin-top: 100px;
  font-weight: 900;
  font-size: 19px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  display: block;
}

.logo span {
  color: var(--main-yellow-color);
}

@media (max-width: 991.98px) {
  #nav {
    max-width: 200px;
  }
  .user__avatar {
    width: 45px;
    height: 45px;
  }
  .logo {
    font-size: 16px;
  }
}
@media (max-width: 767.98px) {
  #nav {
    left: -290px;
  }
}
@media (max-width: 575.98px) {
  #nav {
    padding: 40px 10px;
  }
}
</style>
