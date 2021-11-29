<template>
  <!-- <img alt='Vue logo' src='./assets/logo.png'> -->
  <Title content='1, 2 oder 3' />
  <Controls :controller='controller' @openSettings="openSettings" />
  <Quest title='123' :controller='controller' />
</template>

<script>
import { ref } from 'vue'
import Title from './components/Title.vue'
import Controls from './components/Controls.vue'
import Quest from './components/Quest.vue'
import Onetwothree from './classOnetwothree'

export default {
  name: 'App',
  components: {
    Title,
    Controls,
    Quest
  },
  setup () {
    const controller = ref(new Onetwothree({
      shuffle: true
    }))

    return {
      controller
    }
  }
}
</script>

<style lang='less'>
#app {
  font-family: Jost, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: relative;
  min-height:100vh;
  min-width: 100vw;
  box-sizing: border-box;
  padding: (@gutter);

  display: flex;
  justify-content: center;
  align-items: center;
}
h1, h2, h3, h4, h5, h6{
  font-weight:normal;
}
.overflow-hidden{
  overflow: hidden;
}
button.open-settings{
  position: absolute;
  right: @gutter;
  bottom: @gutter;
}
</style>
