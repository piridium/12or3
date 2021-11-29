<template>
  <div class="toggle-wrapper">
    <div class="toggle" @click="$emit('toggle')" :class="val ? 'on' : 'off'">
      <div class="toggle-indicator"></div>
    </div>
    <div class="toggle-label">{{ label }}</div>
  </div>
</template>

<script>
export default ({
  name: 'Switch',
  props: {
    label: String,
    val: Boolean,
    controller: Object
  }
})
</script>

<style lang="less" scoped>
.toggle-wrapper{
  margin: 0.25em 0;
  display: flex;
  align-items: center;
  column-gap: (@gutter/2);
}
.toggle{
  border:1px solid black;
  border-radius:99999px;
  width:1.5em;
  height:1em;
  cursor: pointer;
  position: relative;
  .toggle-indicator{
    position: absolute;
    border-radius: 99999px;
    width:1em;
    height:1em;
    background-color:grey;
    transition: left 0.2s ease-in-out, right 0.2s ease-in-out;
  }
  &.off .toggle-indicator{
    left:0;
    right:auto;
    background-color: rgb(209, 68, 68);
  }
  &.on .toggle-indicator{
    right:0;
    left:auto;
    background-color: rgb(94, 173, 94);
  }
}
</style>
