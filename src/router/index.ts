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
        path: '/2022ufag',
        name: 'ufag',
        component: () => import('../views/UFAGView.vue'),
        children: [
            {
                path: '/2022ufag',
                name: 'ufagHome',
                component: () => import('../components/ufag/HomePage.vue'),
            },
            {
                path: 'regulation',
                name: 'ufagRegulation',
                component: () => import('../components/ufag/RegulationPage.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
