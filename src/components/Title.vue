<template>
  <div id="title">
    <h1 class="title">{{ content }}</h1>
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
    content: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#title{
  position: absolute;
  top: @gutter;
  left: @gutter;

  .title{
    margin:0;
    font-size: 0.8em;
    line-height:1rem;
  }
}
</style>
r
