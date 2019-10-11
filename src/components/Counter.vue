<template>
  <div class="counter" :style="{ backgroundColor: color2hex(color) }">
    <input
      v-if="isEditing"
      type="text"
      class="name"
      ref="nameInput"
      :value="name"
      @blur="endEdition"
    >
    <h4 v-else class="name" @click="startEdition">{{ name }}</h4>
    <p
      class="points"
      @click="$emit('increment')"
      @click.right.prevent="$emit('decrement')"
    >
      {{ points }}
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    isEditing: false,
  }),
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
    color2hex(color) {
      const colors = {
        blue: '#377aff',
        orange: '#ff8a24',
      };
      return colors[color];
    },
    startEdition() {
      this.isEditing = !this.isEditing;
      this.$nextTick().then((vm) => {
        vm.$refs.nameInput.focus();
      });
    },
    endEdition({ target }) {
      this.isEditing = !this.isEditing;
      this.$emit('nameChange', target.value);
    },
  },
};
</script>

<style scoped>
.counter {
  height: 100%;
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  flex: auto;
}

.name {
  display: inline-block;
  font-size: 3em;
  font-weight: 700;
  margin: 24px;
  background: transparent;
  border: none;
  width: auto;
}

.points {
  font-size: 20em;
  margin: 0;
  cursor: pointer;
}
</style>
