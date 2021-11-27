<template>
  <div class="answer" @click="controller.check()" :class="checked ? (correct ? 'correct' : 'incorrect') : ''">
    <p class="number">{{ nr }}</p>
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Answer',
  props: {
    content: String,
    nr: Number,
    controller: Object
  },
  setup (props) {
    const checked = computed(function () {
      return props.controller.solution
    })
    const correct = computed(function () {
      return props.controller.isCorrect(props.nr - 1)
    })

    return {
      checked,
      correct
    }
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
  text-align: center;
  &:nth-child(1){ background-color: @color1; }
  &:nth-child(2){ background-color: @color2; }
  &:nth-child(3){ background-color: @color3; }
}
p{
  margin:0;
  &.number{
    font-size: 1.5em;
  }
  &.content{
    font-size: 1em;
  }
}
div.answer.correct {
  background-color: @color-true;
}
div.answer.incorrect {
  background-color: @color-false;
}
</style>
