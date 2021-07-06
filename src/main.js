import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { createWebHistory, createRouter } from 'vue-router'
import Details from './components/Game-Details.vue'
import Home from './views/Home.vue'


const router = createRouter({
    routes: [
        { path: '/details/:id', component: Details },
        { path: '/', component: Home },
    ],
    history: createWebHistory()
});

createApp(App).use(router).mount('#app')
