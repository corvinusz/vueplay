<template>
  <div
    id="hello"
    @click="handleClick($event)"
  >
    <h1>Hello {{ name }}!</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick (event) {
      const targetId = event.currentTarget.id;
      console.log('clicked ' + targetId);
      alert('Click!');
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  color: red;
}
</style>
