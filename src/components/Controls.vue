<template>
  <button @click="controller.previousSlide()">Prev Slide</button>
  <p>Settings-Component</p>
  <button @click="controller.nextSlide()">Next Slide</button>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    controller: Object
  }
}
</script>
