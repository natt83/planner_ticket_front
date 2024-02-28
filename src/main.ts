import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios, {isCancel, AxiosError} from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'mdb-vue-ui-kit/css/mdb.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { MDBModal } from 'mdb-vue-ui-kit'; 


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.component('mdb-modal', MDBModal);

app.mount('#app')
