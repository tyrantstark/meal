import Router from 'vue-router';
import AppHome from '@/components//AppHome.vue';
import AboutPage from '@/components/About.vue';
import RegisterPage from '@/components/Register.vue';
import MealMenu from '@/components/MealMenu.vue';
import MealCart from '@/components/Cart.vue';
// import LoginPage from '@/components/login.vue';

const router = new Router({
    mode: 'history', 
    routes: [
        {
            name: 'home',
            path: '/',
            component: AppHome
        },
        {
            name: 'aboutUs', 
            path: '/about',
            component: AboutPage
        },
        {
            name: 'register',
            path: '/register',
            component: RegisterPage
        },
        // {
        //     name: 'signin',
        //     path: '/login',
        //     component: LoginPage
        // },
        {
            name: 'meals',
            path: '/meals',
            component: MealMenu
        },
        {
            name: 'Cart',
            path: '/cart',
            component: MealCart
        }


    ]      
});

export default router;