<template>
  <div id="app">
    <v-app>
      <v-content full-width>
        <hello-component name="World" />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss">
  @import './App.scss';
</style>
