import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './index.css'
import App from '@/App.vue'
import Home from '@/pages/Home.vue'
import Works from '@/pages/Works.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/works', name: 'Works', component: Works},
        {path: '/about', name: 'About', component: About},
        {path: '/contact', name: 'Contact', component: Contact}
    ]
})

createApp(App)
.use(router)
.mount('#app')
