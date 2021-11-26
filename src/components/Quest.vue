<template>
  <div class="quest">
    <h1>{{ title }}</h1>
    <question :question="question" />
    <div id="answer-container">
      <answer v-for="(answer, index) in answers" :key="answer.id" :nr="index+1" :content="answer.content" /> <!-- later pass data as object-->
    </div>
  </div>
</template>

<script>
import Onetwothree from '../classOnetwothree.js'
import Question from './Question.vue'
import Answer from './Answer.vue'

const controller = new Onetwothree({
  shuffle: true
})

export default {
  name: 'Quest',
  props: {
    title: String
  },
  components: {
    Question,
    Answer
  },
  data () {
    return {
      question: controller.getSlide().question,
      answers: controller.getSlide().answers,
      controller: { controller }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#answer-container{
  display: flex;
  @media screen and (max-width: 60em) {
    flex-wrap: wrap;
  }
  padding: (@gutter/2);
}
</style>
r
