<template>
  <transition name='fade'>
    <div class='settings' v-if='show'>
      <div class='settings__backdrop' @click="$emit('closeSettings')"/>

      <div class='settings__dialog'>
        <div class='settings__header'>
          <h1>Settings</h1>
          <button type='button' class='settings__close' @click="$emit('closeSettings')">
            <span></span>
            <span></span>
          </button>
        </div>
        <div class='settings__body'>
          <Toggle label="Dark Mode" :val="true" :controller="controller" />
          <Toggle label="Shuffle Questions" :val="false" :controller="controller" />
          <Toggle label="Shuffle Answers" :val="false" :controller="controller" />
          <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
        </div>
        <div class='settings__footer'>
          <div>
            <button @click="$emit('closeSettings')">Cancel</button>
            <button @click="$emit('closeSettings')">Save</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Toggle from './Toggle'

export default {
  name: 'Settings',
  components: {
    Toggle
  },
  props: ['show']
}
</script>

<style lang='less' scoped>
.settings {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  font-size:1rem;
  &__backdrop {
    background-color: fade(black, 30%);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 30em;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    border: none;
    position: relative;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    span{
      position: absolute;
      background-color: black;
      display: block;
      width:1.5em;
      height:2px;
      transform-origin: center center;
      margin:0;
      transform: rotate(45deg);
    }
    span:first-child{
      transform: rotate(-45deg);
    }
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
