import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const paths = {
  home: '/',
  products: '/products',
  settings: '/settings',
};

const routes = [
  {
    path: paths.home,
    name: 'Home',
    component: Home,
  },
  {
    path: paths.products,
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products'),
  },
  {
    path: paths.settings,
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
