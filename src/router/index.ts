import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: '/',
                name: 'homepage',
                component: () => import('../components/main/HomePage.vue'),
            },
            {
                path: '/news',
                name: 'news',
                component: () => import('../components/main/NewsPage.vue'),
            },
            {
                path: '/news/post/:postId',
                name: 'post',
                component: () => import('../components/main/PostPage.vue'),
            },
            {
                path: '/games',
                name: 'games',
                component: () => import('../components/main/GamesPage.vue'),
            },
            {
                path: '/games/:gameId',
                name: 'gamesData',
                component: () => import('../components/main/GamesData.vue'),
            },
        ],
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
