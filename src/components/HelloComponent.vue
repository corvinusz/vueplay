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
        color="success"
        v-model="form.isDisabled"
      >
        <!-- svg path -->
        <svg
          slot="extra"
          class="svg svg-icon"
          viewBox="0 0 20 20"
        >
          <path
            d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
            style="stroke:white;fill:white"
          />
        </svg>
        Disabled
      </PrettyCheck>
    </div>

    <div>
      <p> {{ disabledText }}</p>
    </div>

    <MyModal
      name="my-modal"
      @ok-pressed="handleDialogOk"
      @cancel-pressed="handleDialogCancel"
    />
  </div>
  <!--- this template on Pug
  div
    h1 Hello {{ name }}!
    button(@click='handleBtnClick()')
      | Show Modal
    .checkbox-container
      prettycheck.p-svg.p-curve(color='success' v-model='form.isDisabled')
        // svg path
        svg.svg.svg-icon(slot='extra' viewbox='0 0 20 20')
          path(d='M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z' style='stroke:white;fill:white')
        |         Disabled
    div
      p  {{ disabledText }}
    mymodal(name='my-modal' @ok-pressed='handleDialogOk' @cancel-pressed='handleDialogCancel')

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

  computed: {
    disabledText: function() {
      return this.form.isDisabled ? 'disabled' : 'enabled'
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

<style lang="scss">
  $lsAppHighlight: #009af2;
  $pretty--color-success: $lsAppHighlight;
  @import '~pretty-checkbox/src/pretty-checkbox.scss';

  h1 {
    color: red;
  }

  .checkbox-container {
    padding: 30px 0;
    margin: 30px 0;
  }

</style>
