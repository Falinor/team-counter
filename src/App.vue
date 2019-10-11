<template>
  <div id="app">
    <button id="reset" type="button" @click="reset">
      <i class="material-icons">replay</i>
    </button>
    <Counter
      v-for="(team, i) in teams"
      :key="i"
      v-bind="team"
      @increment="increment(i)"
      @decrement="decrement(i)"
      @nameChange="name => changeName({ i, name })"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import Counter from '@/components/Counter.vue';
import {
  CHANGE_NAME,
  DECREMENT,
  INCREMENT,
  RESET,
} from '@/store';

export default {
  name: 'app',
  components: { Counter },
  computed: mapState(['teams']),
  methods: mapMutations([INCREMENT, DECREMENT, CHANGE_NAME, RESET]),
};
</script>

<style>
* {
  font-family: Roboto, sans-serif;
  color: rgba(0, 0, 0, 0.87);
}

body {
  font-size: 16px;
  margin: 0;
}

#app {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#reset {
  position: fixed;
  left: 0;
  top: 0;
  margin: 16px;
  padding: 0;
  background: transparent;
  border: none;
}

#time {
  position: fixed;
  right: 0;
  top: 0;
  margin: 16px;
  padding: 0;
}
</style>
