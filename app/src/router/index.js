import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPages from '@/pages/MainPages';
import ProductPages from "@/pages/ProductPages";
import NotFoundPage from "@/pages/NotFoundPage";
import CartPage from "@/pages/CartPage";

Vue.use(VueRouter);

const routes = [
    {name: 'main', component: MainPages, path: '/'},
    {name: 'product', component: ProductPages, path: '/product/:id'},
    {name: 'not-found-page', component: NotFoundPage, path: '*'},
    {name: 'cart', component: CartPage, path: '/cart/'},

];

const router = new VueRouter({
    routes,
});

export default router;