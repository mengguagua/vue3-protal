import { createRouter, createWebHashHistory } from "vue-router";
const index = () => import('/src/pages/index.vue');
const onlineCredit = () => import('/src/pages/onlineCredit.vue');
const riskControl = () => import('/src/pages/riskControl.vue');
const monitor = () => import('/src/pages/monitor.vue');
const operate = () => import('/src/pages/operate.vue');
const logistics = () => import('/src/pages/logistics.vue');
const infoShare = () => import('/src/pages/infoShare.vue');
const newsDetail = () => import('/src/pages/newsDetail.vue');

let routes= [
  {
    path: '/',
    name: 'index',
    component: index,
  }, {
    path: '/index',
    name: 'index',
    component: index,
  }, {
    path: '/onlineCredit',
    name: 'onlineCredit',
    component: onlineCredit,
  }, {
    path: '/riskControl',
    name: 'riskControl',
    component: riskControl,
  }, {
    path: '/monitor',
    name: 'monitor',
    component: monitor,
  }, {
    path: '/operate',
    name: 'operate',
    component: operate,
  }, {
    path: '/logistics',
    name: 'logistics',
    component: logistics,
  }, {
    path: '/infoShare',
    name: 'infoShare',
    component: infoShare,
  }, {
    path: '/newsDetail',
    name: 'newsDetail',
    component: newsDetail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})


export default router
