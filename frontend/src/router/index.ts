import { createRouter, createWebHistory } from 'vue-router'

import Overview from '@/views/Overview.vue'
const Collector = () => import('@/views/collector/index.vue')
const Crawlrule = () => import('@/views/crawlrule/index.vue')
const Parser = () => import('@/views/parser/index.vue')
const Increment = () => import('@/views/increment/index.vue')
const Ratelimit = () => import('@/views/ratelimit/index.vue')
const Retry = () => import('@/views/retry/index.vue')
const Rpaflow = () => import('@/views/rpaflow/index.vue')
const Captcha = () => import('@/views/captcha/index.vue')
const Proxy = () => import('@/views/proxy/index.vue')
const Session = () => import('@/views/session/index.vue')
const Router = () => import('@/views/router/index.vue')
const Validate = () => import('@/views/validate/index.vue')
const Dedup = () => import('@/views/dedup/index.vue')
const Format = () => import('@/views/format/index.vue')
const Pipeline = () => import('@/views/pipeline/index.vue')
const Storage = () => import('@/views/storage/index.vue')
const Monitor = () => import('@/views/monitor/index.vue')
const Scheduler = () => import('@/views/scheduler/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'overview', component: Overview },
    { path: '/collector', name: 'collector', component: Collector },
    { path: '/crawlrule', name: 'crawlrule', component: Crawlrule },
    { path: '/parser', name: 'parser', component: Parser },
    { path: '/increment', name: 'increment', component: Increment },
    { path: '/ratelimit', name: 'ratelimit', component: Ratelimit },
    { path: '/retry', name: 'retry', component: Retry },
    { path: '/rpaflow', name: 'rpaflow', component: Rpaflow },
    { path: '/captcha', name: 'captcha', component: Captcha },
    { path: '/proxy', name: 'proxy', component: Proxy },
    { path: '/session', name: 'session', component: Session },
    { path: '/router', name: 'router', component: Router },
    { path: '/validate', name: 'validate', component: Validate },
    { path: '/dedup', name: 'dedup', component: Dedup },
    { path: '/format', name: 'format', component: Format },
    { path: '/pipeline', name: 'pipeline', component: Pipeline },
    { path: '/storage', name: 'storage', component: Storage },
    { path: '/monitor', name: 'monitor', component: Monitor },
    { path: '/scheduler', name: 'scheduler', component: Scheduler },
  ],
})

export default router
