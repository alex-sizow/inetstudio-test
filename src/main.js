import '@formkit/themes/genesis';
import { defaultConfig, plugin } from '@formkit/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(plugin, defaultConfig);
app.mount('#app');
