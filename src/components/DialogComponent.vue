<template>
  <div>
    <div class="dialog-content">
      <div
        class="dialog-c-title"
        v-html="title || ''"></div>
      <div
        class="dialog-c-text"
        v-html="text || ''"></div>
    </div>
    <div
      v-if="buttons">
      <button
        v-for="(button, i) in buttons"
        :class="button.class || 'vue-dialog-button'"
        type="button"
        :style="buttonStyle"
        :key="i"
        v-html="button.title"
        @click.stop="click(i, $event)">
        {{button.title}}
      </button>
    </div>
    <div v-else class="vue-dialog-buttons-none"></div>

  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    buttons: Array,
  },

  computed: {
    buttonStyle () {
      return {
        flex: `1 1 ${100 / this.buttons.length}%`
      }
    }
  },

  methods: {
    click (i, event, source = 'click') {
      const button = this.buttons[i]
      if (button && typeof button.handler === 'function') {
        button.handler(i, event, { source })
        console.log('clicked button '+i);
      } else {
        this.$modal.hide('dialog')
      }
    }
  }
}
</script>

<style>
.vue-dialog div {
  box-sizing: border-box;
}
.vue-dialog .dialog-flex {
  width: 100%;
  height: 100%;
}
.vue-dialog .dialog-content {
  flex: 1 0 auto;
  width: 100%;
  padding: 15px;
  font-size: 14px;
}
.vue-dialog .dialog-c-title {
  font-weight: 600;
  padding-bottom: 15px;
}
.vue-dialog .vue-dialog-buttons {
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  border-top: 1px solid #eee;
}
.vue-dialog .vue-dialog-buttons-none {
  width: 100%;
  padding-bottom: 15px;
}
.vue-dialog-button {
  font-size: 12px !important;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  color: inherit;
  font: inherit;
  outline: none;
}
.vue-dialog-button:hover {
  background: rgba(0, 0, 0, 0.01);
}
.vue-dialog-button:active {
  background: rgba(0, 0, 0, 0.025);
}
.vue-dialog-button:not(:first-of-type) {
  border-left: 1px solid #eee;
}
</style>