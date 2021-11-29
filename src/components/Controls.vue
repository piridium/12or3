<template>
  <div id="controls">
    <div class="control prev" @click="controller.previousSlide()"><unicon name="angle-left" fill="grey" hover-fill="black"></unicon></div>
    <div class="control next" @click="controller.nextSlide()"><unicon name="angle-right" fill="grey" hover-fill="black"></unicon></div>
    <div class="control check" @click="controller.check()"><unicon name="check" fill="grey" hover-fill="black"></unicon></div>
    <div class="control settings" @click="openSettings"><unicon name="cog" fill="grey" hover-fill="black"></unicon></div>
    <Settings
        ref='Settings'
        :controller='controller'
        :show="showSettings"
        @openSettings="openSettings"
        @closeSettings="closeSettings"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import Settings from './Settings'

export default {
  name: 'Controls',
  components: {
    Settings
  },
  props: {
    controller: Object
  },
  setup () {
    const showSettings = ref(false)

    const openSettings = function () {
      showSettings.value = true
      document.querySelector('body').classList.add('overflow-hidden')
    }

    const closeSettings = function () {
      showSettings.value = false
      document.querySelector('body').classList.remove('overflow-hidden')
    }

    return {
      showSettings,
      openSettings,
      closeSettings
    }
  }
}
</script>

<style lang="less" scoped>
#controls{
  position: absolute;
  top: @gutter;
  right: @gutter;

  display: flex;
  column-gap: (@gutter/4);

  .control{
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>
