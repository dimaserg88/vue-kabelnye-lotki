export default {
  state: () => ({
    isAuth: false,
    likes: 2,
  }),
  getters: {
    GET_LIKES(state) {
      return state.likes;
    },
  },
  mutations: {
    INCREMENT_LIKES(state) {
      state.likes += 1;
    },
  },
  actions: {},
  namespaced: true,
};
