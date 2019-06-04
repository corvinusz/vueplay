<template>
  <v-layout justify-center>
    <div>
      <h1>Hello {{ name }}!</h1>
      <v-chip label color="white" text-color="primary"
        class="show-modal-button"
        @click="handleBtnClick()"
      >
        <v-icon left small>fa-plus-circle</v-icon>SHOW MODAL
      </v-chip>
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
  </v-layout>
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

.show-modal-button {
  margin: 30px 0;
}
.checkbox-container {
  margin: 30px 0;
}
</style>
