<template>
  <modal :name="name">
    <slot>
      <button
        class="modal-button modal-button-ok"
        @click="handleOK()"
      >
        Ok
      </button>
      <button
        class="modal-button modal-button-cancel"
        @click="handleCancel()"
      >
        Cancel
      </button>
    </slot>
  </modal>
</template>

<script>
export default {
  name: 'MyModal',

  props: {
    name: {
      type: String,
      required: true
    }
  },

  methods: {
    handleOK () {
      this.$emit('ok-pressed')
    },
    handleCancel () {
      this.$emit('cancel-pressed')
    }
  }
}
</script>

<style scoped lang="scss">
.modal-button {
    border: 1px solid currentColor;
    padding: 10px 15px;
    border-radius: 10px;
    color: #fff;
    background: crimson;
    font-weight: bold
}

.modal-button-ok {
    background: green;
}

.modal-button-cancel {
    background: red;
}
</style>
