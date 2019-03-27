<template>
  <div
    id="hello"
    @click="handleClick($event)"
  >
    <h1>Hello {{ name }}!</h1>
    <modals-container />
  </div>
</template>

<script>
import DialogComponent from './DialogComponent.vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {

    showDialog() {
      const dialogOptions = {
        title: 'Confirm action',
        text: 'Do action ?',
        buttons: [
          {
            title: 'CANCEL',
            handler: () => {
              console.log('Cancel pressed')
              this.$modal.hide(DialogComponent)
            }
          },
          {
            title: 'OK',
            default: true,
            handler: () => {
              console.log('OK pressed')
              this.$modal.hide(DialogComponent)
            }
          }
        ]
      }
      this.$modal.show(DialogComponent, dialogOptions)
    },

    handleClick (event) {
      const targetId = event.currentTarget.id
      console.log('clicked ' + targetId)
      this.showDialog()
    }
  }
}
</script>

<style lang="stylus" scoped>
h1 {
  color: red;
}
</style>
