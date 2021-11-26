<template>
  <div class="answer">
    <p class="number">{{ nr }}</p>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    content: String,
    nr: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div.answer{
  flex: 0 1 100%;
  background-color: rgb(182, 204, 230);
  margin: (@gutter/2);
  padding: @gutter;
}
p{
  margin:0;
  &.number{
    font-size: 3em;
  }
  &.content{
    font-size: 2em;
  }
}
</style>
