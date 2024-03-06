export const routes = [
  {
    name: 'Main',
    path: '/',
    component: () => import('@/pages/Main.vue'),
    meta: {
      noAuth: true,
      title: 'Главная'
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      noAuth: true,
      title: 'Login'
    }
  },
  {
    name: 'Browse',
    path: '/browse',
    component: () => import('@/pages/Browse.vue'),
    meta: {
      title: 'Browse'
    }
  },
];
