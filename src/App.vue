<template>
  <div id="app">
    <v-app>
      <v-content full-width>
        <Landing name="coder" />
      </v-content>
    </v-app>
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
