<template>
  <div
    id="app"
    class="center-content full-width"
  >
    <Landing name="coder" />
  </div>
</template>

<script>
import Landing from './pages/Landing.vue'

export default {
  components: {
    Landing
  }
}
</script>

<style lang="scss">
  @import './App.scss';
</style>
