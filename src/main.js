import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import {Checkbox,Input,Select, Avatar,Table,Card ,Menu ,List,Drawer ,Button, message } from 'ant-design-vue';
import axios from 'axios';
window.axios =axios;
import './style.css'
import App from './App.vue'
import './static/fontawesome-free-6.7.2-web/css/all.min.css'
import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const app=createApp(App);
app.use(createPinia());
app.use(router)
app.use(Button);
app.use(Checkbox);
app.use(Input);
app.use(Table);
app.use(Avatar);
app.use(Select);
app.use(Card);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.mount('#app')
app.config.globalProperties.$message = message;