import { createRouter, createWebHashHistory } from 'vue-router'
import AllEtudiants from "./components/Etudiants/AllEtudiants";
import AddEtudiants from "./components/Etudiants/AddEtudiants";
import EditEtudiants from "./components/Etudiants/EditEtudiants";
import Home from "./Home";
import Register from './components/Authentification/Register';
import Login from './components/Authentification/Login';
import Profile from './components/Authentification/Profile.vue'; 
import Logout from './components/Authentification/Logout.vue'; 
const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/etudiant',
        name: 'etudiant',
        component: AllEtudiants
    },
    {
        path: '/AddEtudiants',
        name: 'AddEtudiants',
        component: AddEtudiants
    },
    {
        path: '/editetudiant',
        name: 'editetudiant',
        component: EditEtudiants
    },
    {
        name: 'register',
        path: '/register',
        component: Register
        },
        {
        name: 'login',
        path: '/login',
        component: Login
        },
        {
        name: 'profile',
        path: '/profile',
        component: Profile
        }, 
        {
            name: 'logout',
            path: '/logout',
            component: Logout
            }, 
           





];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router