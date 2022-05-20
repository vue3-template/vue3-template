import { createApp } from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/index.scss' // global css
import store from '@/store'
import router from '@/router'
import '@/mock'
import '@/entrypoint'
import i18n from '@/lang' // internationalization
import SvgIcon from '@/components/SvgIcon/index.vue' // svg component
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vite-plugin-svg-icons/register' // register svg sprite map
import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(i18n)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
