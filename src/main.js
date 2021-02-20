import Vue from 'vue'
import App from './App.vue'
import Clipboard from 'v-clipboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookSquare)
library.add(faTwitter)
library.add(faPinterest)
library.add(faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
