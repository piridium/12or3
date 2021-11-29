<template>
  <div id="controls">
    <div class="control prev" @click="controller.previousSlide()"><unicon name="angle-left" fill="grey" hover-fill="black"></unicon></div>
    <div class="control next" @click="controller.nextSlide()"><unicon name="angle-right" fill="grey" hover-fill="black"></unicon></div>
    <div class="control check" @click="controller.check()"><unicon name="check" fill="grey" hover-fill="black"></unicon></div>
    <div class="control settings" @click="controller.openSettings()"><unicon name="cog" fill="grey" hover-fill="black"></unicon></div>
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    controller: Object
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
