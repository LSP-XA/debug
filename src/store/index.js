import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showSub: false
  },
  mutations: {
    UPDATE_SHOWSUB(state, val) {
      state.showSub = val;
    }
  },
  actions: {},
  modules: {}
});
