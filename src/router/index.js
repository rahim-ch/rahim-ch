import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Ensure Home.vue exists
import Projects from '../components/Projects.vue';  // Ensure Projects.vue exists
import Contact from '../components/Contact.vue';  // Ensure Contact.vue exists

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
