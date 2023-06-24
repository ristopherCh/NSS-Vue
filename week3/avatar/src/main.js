import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/fluent-light/theme.css'
import './assets/main.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(PrimeVue).mount('#app')
