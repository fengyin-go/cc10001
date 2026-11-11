<template>
  <div class="app-shell">
    <aside class="app-side">
      <h1 class="app-title">智能采集调度平台</h1>
      <nav class="nav-list">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item">
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>
    <main class="app-main">
      <header class="app-head">
        <span class="head-desc">面向多源网页采集、增量抓取、自动化流程编排、采集结果校验与失败重试的智能数据采集调度平台。</span>
        <span class="head-user">当前值班：{{ store.operator }} · {{ store.shiftLabel }}</span>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/stores/session'

const store = useSessionStore()

const navItems = [{ label: "运营概览", path: "/" }, { label: "采集引擎", path: "/collector" }, { label: "页面抽取规则", path: "/crawlrule" }, { label: "内容解析器", path: "/parser" }, { label: "增量采集", path: "/increment" }, { label: "限速调度", path: "/ratelimit" }, { label: "失败重试", path: "/retry" }, { label: "自动化流程", path: "/rpaflow" }, { label: "验证码识别", path: "/captcha" }, { label: "代理池管理", path: "/proxy" }, { label: "会话状态", path: "/session" }, { label: "链路分发", path: "/router" }, { label: "采集校验", path: "/validate" }, { label: "去重过滤", path: "/dedup" }, { label: "格式归一", path: "/format" }, { label: "采集流水线", path: "/pipeline" }, { label: "采集存储", path: "/storage" }, { label: "采集监控", path: "/monitor" }, { label: "定时调度", path: "/scheduler" }]
</script>
