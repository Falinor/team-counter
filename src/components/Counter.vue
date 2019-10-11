<template>
  <div class="counter" :style="{ backgroundColor: color2hex(color) }">
    <h4 class="name">{{ name }}</h4>
    <p class="points" @click="increment({ id, points })" @contextmenu="decrement({ id, points })">{{ points }}</p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

import { DECREMENT, INCREMENT } from '../store';

export default {
  props: {
    id: Number,
    name: String,
    points: Number,
    color: {
      type: String,
      validator(value) {
        return ['blue', 'orange'].find(color => color === value) !== undefined;
      },
    },
  },
  methods: {
    ...mapMutations([INCREMENT, DECREMENT]),
    color2hex(color) {
      const colors = {
        blue: '#377aff',
        orange: '#ff8a24',
      };
      return colors[color];
    },
  },
};
</script>

<style scoped>
.counter {
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  flex: auto;
}

.name {
  font-size: 3em;
}

.points {
  font-size: 20em;
  margin: 0;
  cursor: pointer;
}
</style>
