<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Controls :controller="controller" />
  <Quest title="123" :controller="controller"/>
</template>

<script>
import { reactive } from 'vue'
import Controls from './components/Controls.vue'
import Quest from './components/Quest.vue'
import Onetwothree from './classOnetwothree'

export default {
  name: 'App',
  components: {
    Controls,
    Quest
  },
  setup () {
    const controller = reactive(new Onetwothree({
      shuffle: true
    }))

    return {
      controller
    }
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
