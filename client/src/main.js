import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/black-green-light.css'

import io from 'socket.io-client';
const socket = io('http://localhost:3001');


Vue.prototype.$socket = socket;
Vue.use(VueMaterial)

Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')