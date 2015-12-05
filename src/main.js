import Vue from 'vue'

let router = new VueRouter()
import Index from './vue/index.vue'
router.map({
    '/': {
        component: Index
    }
})

let App = Vue.extend({})
router.start(App, '#app')
