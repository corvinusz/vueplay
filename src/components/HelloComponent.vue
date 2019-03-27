<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <button
      @click="handleBtnClick()"
    >
      Show Modal
    </button>

    <MyModal
      name="my-modal"
      @ok-pressed="handleDialogOk"
      @cancel-pressed="handleDialogCancel"
    />
  </div>
</template>

<script>
import MyModal from './MyModal'

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
    handleBtnClick () {
      this.$modal.show('my-modal')
    },

    handleDialogOk () {
      alert('OK')
      this.$modal.hide('my-modal')
    },

    handleDialogCancel () {
      alert('Cancel')
      this.$modal.hide('my-modal')
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  color: red;
}
</style>
