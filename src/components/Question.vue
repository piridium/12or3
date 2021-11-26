<template>
  <div class="question">
    <h2 class="content">{{ question }}</h2>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: String,
    controller: {
      type: Object,
      default: () => ({})
    }
  }
  // created: function () {
  //   const controller = this.controller.controller
  //   const question = controller.getSlide().question ?? ''
  //   console.log(question)
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h2{
  font-size:3em;
  font-weight: normal;
}
</style>
