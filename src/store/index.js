import Vue from 'vue';
import Vuex from 'vuex';

import { write } from '@/controllers/storage';
import { getCalorieLevel } from '@/utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName: '',
    lastName: '',
    sex: undefined,
    age: 20,
    weight: 20,
    height: 150,
    activity: 1.2,
  },
  getters: {
    calorieLevel: (state) => getCalorieLevel(
      state.sex,
      state.weight,
      state.height,
      state.age,
      state.activity,
    ),
  },
  mutations: {
    saveUserParams(state, payload) {
      const {
        firstName,
        lastName,
        sex,
        age,
        weight,
        height,
        activity,
      } = payload;

      state.firstName = firstName;
      state.lastName = lastName;
      state.sex = sex;
      state.age = age;
      state.weight = weight;
      state.height = height;
      state.activity = activity;
    },
  },
  actions: {
    saveUserParams({ commit }, payload) {
      commit('saveUserParams', payload);
      write(payload);
    },
  },
});
