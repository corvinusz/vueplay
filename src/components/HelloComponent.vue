<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <button
      @click="handleBtnClick()"
    >
      Show Modal
    </button>

    <div class="checkbox-container">
      <PrettyCheck
        v-model="form.isDisabled"
        class="p-svg p-curve"
        color="primary"
      >
        <img
          slot="extra"
          class="svg"
          src="../assets/img/check.svg"
        >
        Disabled
      </PrettyCheck>
    </div>

    <div>
      <img
        v-if="!form.isDisabled"
        src="../assets/img/wikimedia.svg"
      >
    </div>

    <MyModal
      name="my-modal"
      @ok-pressed="handleDialogOk"
      @cancel-pressed="handleDialogCancel"
    />
  </div>
</template>

<script>
import MyModal from './MyModal'
import PrettyCheck from 'pretty-checkbox-vue/check'

export default {
  components: {
    MyModal,
    PrettyCheck
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      form: {
        isDisabled: false
      }
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

<style scoped lang="scss">

h1 {
  color: #f00;
}
.checkbox-container {
  padding: 30px 0;
  margin: 30px 0;
}
</style>
