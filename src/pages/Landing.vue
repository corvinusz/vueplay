<template lang="pug">
  div.landing__container
    h1.landing__title Hello {{ name }}!
    //- button with icon
    Button.landing__button__show-modal(@click='handleBtnClick()')
      | SHOW MODAL

    //- checkbox with icon
    div.landing__checkbox
      PrettyCheck.p-svg.p-curve(
        v-model='form.isDisabled',
        color='primary'
      )
        img.svg(
          slot='extra',
          src='../assets/img/check.svg'
        )
        | Disabled
    //- image
    img.landing__image(
      v-if='!form.isDisabled',
      src='../assets/img/wikimedia.svg'
    )
    //- modal dialog
    MyModal(
      name='my-modal',
      @ok-pressed='handleDialogOk'
    )
</template>

<script>
import 'core-js/stable'
import 'regenerator-runtime'

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
      },
      selectionData: [],
      total: 0
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
.landing {
  &__title {
    display: block;
    color: #f00;
  }

  &__button__show-modal {
    width: 100px;
    margin: 30px auto;
    display: block;
  }
  &__checkbox {
    margin: 30px auto;
    display: block;
  }
  &__image {
    display: block;
    margin: auto;
  }
}
</style>
