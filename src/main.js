import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import Unicon from 'vue-unicons' // https://github.com/antonreshetov/vue-unicons
import {
  uniCog,
  uniAngleLeft,
  uniAngleRight,
  uniCheck
} from 'vue-unicons/dist/icons'

Unicon.add([uniCog, uniAngleLeft, uniAngleRight, uniCheck])

createApp(App).use(Unicon).mount('#app')
