<template>
  <div id="quest">
    <!-- <h1>{{ title }}</h1> -->
    <question :nr="question.id+1" :content="question.content" />
    <div id="answer-container">
      <answer v-for="(answer, index) in answers" :controller="controller" :key="answer.id" :nr="index+1" :content="answer.content" /> <!-- later pass data as object-->
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import Question from './Question.vue'
import Answer from './Answer.vue'

export default {
  name: 'Quest',
  props: {
    title: String,
    controller: Object
  },
  components: {
    Question,
    Answer
  },
  setup (props) {
    // console.log(this.controller)
    const question = computed(function () {
      return props.controller.getQuestion()
    })
    const answers = computed(function () {
      return props.controller.getAnswers()
    })
    return {
      question,
      answers
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#quest{
  flex: 0 1 100em;
}
#answer-container{
  display: flex;
  @media screen and (max-width: 60em) {
    flex-wrap: wrap;
  }
  margin: (-@gutter/2);
}
</style>
r
