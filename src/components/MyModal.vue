<template>
  <modal :name="name">
    <slot>
      <div class="btn-holder">
        <button
          class="modal-button modal-button-ok"
          @click="handleOK()"
        >
          Ok
        </button>
      </div>
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
    }
  }
}
</script>

<style scoped lang="scss">

.btn-holder {
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: center;
}

.modal-button {
  border: 1px solid currentColor;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  background: crimson;
  font-weight: bold;
}

.modal-button-ok {
    background: green;
}

</style>
