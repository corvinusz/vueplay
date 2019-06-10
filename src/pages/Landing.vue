<template lang="pug">
  v-layout(justify-center='')
    div
      h1 Hello {{ name }}!

      //- button with icon
      v-chip.show-modal-button(
        color='white',
        text-color='primary',
        @click='handleBtnClick()'
      )
        v-icon(left='', small='', dark='')
          | $vuetify.icons.plus
        | SHOW MODAL

      //- checkbox with icon
      div.checkbox-disabled
        PrettyCheck.p-svg.p-curve(
          v-model='form.isDisabled',
          color='primary')
          img.svg(
            slot='extra',
            src='../assets/img/check.svg')
          |Disabled
      div
        img(
          v-if='!form.isDisabled',
          src='../assets/img/wikimedia.svg'
        )
    MyModal(
      name='my-modal',
      @ok-pressed='handleDialogOk'
    )
</template>

<script>
import MyModal from '../components/modals/MyModal'
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
.checkbox-disabled {
  margin: 30px 0;
}
</style>
