import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';

//注入 elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//scss全域
import '@/assets/css/app.scss';
//注入 awnsome icon
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// vue router
import router from './router';
// axios 注入假資料
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.config.productionTip = false;
new Vue({ router, render: (h) => h(App) }).$mount('#app');
