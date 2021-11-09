import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario'
import Recursos from './components/Recursos'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario' },
        { path: '/formulario', component: Formulario },
        { path: '/recursos', component: Recursos },    
    ]
})
