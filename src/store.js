import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    teams: [
      {
        id: 1, name: 'Team 1', points: 0, color: 'blue',
      },
      {
        id: 2, name: 'Team 2', points: 0, color: 'orange',
      },
    ],
  },
  mutations: {
    [INCREMENT](state, team) {
      console.log(team);
      if (team && team.points > 0) {
        Vue.set(team, 'points', team.points + 1);
        state.teams = [...state.teams];
      }
    },
    [DECREMENT](state, teamId) {
      const team = state.teams.find(t => t.id === teamId);
      if (team && team.points > 0) {
        Vue.set(team, 'points', team.points - 1);
      }
    },
  },
});
