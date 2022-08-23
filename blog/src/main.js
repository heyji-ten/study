import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { router } from './router'
import ElementPlus from 'element-plus'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass, faHatWizard)



createApp(App).use(Quasar, quasarUserOptions).use(router).use(ElementPlus).mount('#app').component('font-awesome-icon', FontAwesomeIcon)
