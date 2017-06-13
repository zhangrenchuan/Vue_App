import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './components/app.vue'

Vue.use(VueResource)

/*eslint-disable no-new*/
new Vue({
  el: 'body',
  components: { app }
})
