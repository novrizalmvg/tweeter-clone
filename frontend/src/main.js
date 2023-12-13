import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { notification } from './utils/notification.js'

const app = createApp(App)

app.config.globalProperties.$notification = notification

app.use(router)
app.use(store)
app.mount('#app')

