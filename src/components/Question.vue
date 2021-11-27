<template>
  <div id="question">
    <p class="number">Frage {{ nr }}</p>
    <h2 class="content">{{ content }}</h2>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    content: String,
    nr: Number,
    controller: {
      type: Object,
      default: () => ({})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#question{
  text-align: center;
}
p{
  font-size: 1em;
  margin-bottom:0;
}
h2{
  font-size:1.5em;
  font-weight: normal;
  margin-top:0;
}
</style>
