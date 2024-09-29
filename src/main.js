import { createApp } from 'vue'
import App from './App.vue'
import AppLink from '@/components/AppLink.vue'
import router from '@/router'

const app = createApp(App)
app.component('AppLink', AppLink)
app.use(router)

app.mount('#app')
