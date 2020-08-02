import Vue from 'vue';
import Vuex from 'vuex';

import { write } from '@/controllers/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: '',
    sex: undefined,
    age: 20,
  },
  mutations: {
    saveUserParams(state, payload) {
      const {
        firstName,
        lastName,
        sex,
        age,
      } = payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.sex = sex;
      state.age = age;
    },
  },
  actions: {
    saveUserParams({ commit }, payload) {
      commit('saveUserParams', payload);
      write(payload);
    },
  },
  // modules: {
  // },
});
