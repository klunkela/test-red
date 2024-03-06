import {createRouter, createWebHistory} from 'vue-router';
import {routes} from './routes';
import {useStore} from "vuex";

export const Router = createRouter({
  history: createWebHistory(),
  routes,
});

Router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'red-soft';
  const store = useStore()
  const token = localStorage.getItem('context');

  if (token) {
    const isAuthed = await store.dispatch('user/getUser', {token})
    if (to.name === 'Login') {
      return isAuthed ? next({path: '/'}) : next();
    }
    return next();
  } else {
    if (to.name !== 'Login' && to.name !== 'Main') {
      return next({name: 'Login'});
    }
    return next();
  }
});
