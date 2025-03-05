import { createApp } from 'vue'
import router from './router/index.js'
import { Menu ,List,Drawer ,Button, message } from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const app=createApp(App);
app.use(router)
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);


app.mount('#app')
app.config.globalProperties.$message = message;