import { createStore } from "vuex";

export default createStore({
  state: {
    count: 5,
    user: {},
  },
  mutations: {
    changeuser(state, user) {
      state.user = user;
    },
    changecount(state, data) {
      state.count = data;
    },
  },
  actions: {},
  modules: {},
});
