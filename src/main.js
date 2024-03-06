import {createApp} from 'vue'
import App from './App.vue'
import store from './store'
import {Router} from "./router/index";
import '@/assets/scss/app.scss';

createApp(App)
  .use(Router)
  .use(store)
  .mount('#app')
