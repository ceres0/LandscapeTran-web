import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(naive)

app.mount('#app')

// const BaseAPI = import.meta.env.VITE_API_URL + import.meta.env.VITE_API_BASE
// console.log(BaseAPI)