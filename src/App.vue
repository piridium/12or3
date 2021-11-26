<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Controls />
  <Quest title="123"/>
</template>

<script>
import Controls from './components/Controls.vue'
import Quest from './components/Quest.vue'

export default {
  name: 'App',
  components: {
    Controls,
    Quest
  }
}
</script>

<style lang="less">
#app {
  font-family: Jost, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
