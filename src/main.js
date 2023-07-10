import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import { router } from './router';
import "bootstrap/dist/js/bootstrap.js";
createApp(App).use(router).mount('#app')


