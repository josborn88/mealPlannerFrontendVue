import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewMeal from '../views/NewMeal.vue';
import MealPlan from '../views/MealPlan.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/newMeal',
    name: 'NewMeal',
    component: NewMeal,
  },
  {
    path: '/planMeals',
    name: 'MealPlan',
    component: MealPlan,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
