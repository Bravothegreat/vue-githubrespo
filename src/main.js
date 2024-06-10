import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faEnvelope)

const app = createApp(App)
app.use(createPinia())
app.use(router).component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
