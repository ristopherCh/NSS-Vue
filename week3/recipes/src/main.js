import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/arya-purple/theme.css'
import './assets/main.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(PrimeVue).mount('#app')
