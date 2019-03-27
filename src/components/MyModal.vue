<template>
    <modal :name="name">
        <slot>
            <button @click="handleClose()" class="modal-button modal-button_close">
                Ok
            </button>
            <button class="modal-button modal-button_cancel">
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
        required: true,
      },

      handleClose: {
        type: Function
      }
    },
  };
</script>

<style scoped>
    .modal-button {
        border: 1px solid currentColor;
        padding: 10px 15px;
        border-radius: 10px;
        color: #fff;
        background: crimson;
        font-weight: bold
    }

    .modal-button_close {
        background: green;
    }

    .modal-button_cancel {
        background: red;
    }
</style>
