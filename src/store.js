import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const RESET = 'reset';
export const CHANGE_NAME = 'changeName';

const createState = () => ({
  teams: [
    {
      id: 1, name: 'Team 1', points: 0, color: 'blue',
    },
    {
      id: 2, name: 'Team 2', points: 0, color: 'orange',
    },
  ],
});

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: createState(),
  mutations: {
    [INCREMENT](state, index) {
      const team = state.teams[index];
      if (team) {
        team.points += 1;
      }
    },
    [DECREMENT](state, index) {
      const team = state.teams[index];
      if (team && team.points > 0) {
        team.points -= 1;
      }
    },
    [CHANGE_NAME](state, { i, name }) {
      const team = state.teams[i];
      if (team) {
        team.name = name;
      }
    },
    [RESET](state) {
      Object.assign(state, createState());
    },
  },
});
