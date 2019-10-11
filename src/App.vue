<template>
  <div id="app">
    <Counter v-for="team in teams" :key="team.id" v-bind="team" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Counter from '@/components/Counter.vue';

export default {
  name: 'app',
  components: { Counter },
  computed: mapState(['teams']),
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
</style>
