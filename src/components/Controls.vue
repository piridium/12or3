<template>
  <div id="controls">
    <div class="control prev" @click="controller.previousSlide()">prev</div>
    <div class="control next" @click="controller.nextSlide()">next</div>
    <div class="control check" @click="controller.check()">check</div>
    <div class="control settings" @click="alert('not implemented')">settings</div>
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
  column-gap: (@gutter/2);

  .control{
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>
