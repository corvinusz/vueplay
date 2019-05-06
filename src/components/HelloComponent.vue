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
        class="p-svg p-curve"
        color="primary"
        v-model="form.isDisabled"
      >
        <img slot="extra" class="svg" src="../assets/img/check.svg">
        Disabled
      </PrettyCheck>
    </div>

    <div>
      <img v-if="!form.isDisabled" src="../assets/img/wikimedia.svg">
    </div>

    <MyModal
      name="my-modal"
      @ok-pressed="handleDialogOk"
      @cancel-pressed="handleDialogCancel"
    />
  </div>
  <!--- checkbox template on Pug
  .checkbox-container
    prettycheck.p-svg.p-curve(color='success' v-model='form.isDisabled')
      img.svg(slot='extra' src='../assets/img/check.svg')
      | Disabled
  --->
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

  data() {
    return {
      form: {
        isDisabled: false,
      },
    };
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

<style lang="scss">
  $lsAppHighlight: #009af2;
  $pretty--color-primary: $lsAppHighlight;
  @import '~pretty-checkbox/src/pretty-checkbox.scss';

  h1 {
    color: red;
  }

  .checkbox-container {
    padding: 30px 0;
    margin: 30px 0;
  }

</style>
