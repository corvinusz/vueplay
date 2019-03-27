<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <button @click="handleClick()">Show Modal</button>

    <MyModal name="my-modal" :handle-close="handleOk"></MyModal>
  </div>
</template>

<script>
import MyModal from './MyModal';
import DialogComponent from './DialogComponent.vue'

export default {
  components: {
    MyModal
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  methods: {
    handleClick (event) {
      this.$modal.show('my-modal');
    },

    handleOk() {
      alert(1);
      this.$modal.hide('my-modal');
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  color: red;
}
</style>
