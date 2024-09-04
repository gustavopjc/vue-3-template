import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './plugins'
import errorHandler from './plugins/handleError'
import snackbar from './plugins/snackbar'
import '../public/style.scss'
import VueTheMask from 'vue-the-mask'
import mitt from 'mitt';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const emitter = mitt()
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.config.globalProperties.emitter = emitter;

app.use(pinia)
app.use(errorHandler)
app.use(snackbar)
app.use(router)
app.use(vuetify)
app.use(VueTheMask)
app.directive('mask')

app.mount('#app')
