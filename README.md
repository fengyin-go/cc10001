# 智能采集调度平台

面向多源网页采集、增量抓取、自动化流程编排、采集结果校验与失败重试的智能数据采集调度平台。

这是一个前后端分离的管理平台：前端 Vue 3 + Vite + TypeScript，后端 FastAPI（Python）。
两边各自独立启动，前端 dev server 已关掉自动打开页面，启动后按终端打印的地址手工打开。

## 目录结构

```text
.
├── frontend/                 Vue 3 + Vite + TypeScript 前端
│   ├── src/views/            每个业务模块一个页面
│   ├── src/api/              统一请求封装
│   ├── src/stores/           会话与筛选状态
│   └── vite.config.ts        dev server 配置（open: false）
├── backend/                  FastAPI（Python） 后端
│   ├── app/routers/          每个业务模块一组接口
│   ├── app/services/         业务规则与状态流转
│   └── app/store.py          内存数据仓库与示例数据
├── .gitignore
└── docker-compose.yml
```

## 启动

### 后端

```bash
cd backend
python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
./run.sh
```

健康检查：`curl http://127.0.0.1:8000/api/health`

### 前端

```bash
cd frontend
npm install
npm run dev
```

前端默认监听 `http://127.0.0.1:5173/`，dev server 不会自动打开浏览器，
需要自己访问。`/api` 由 vite 代理到后端 `http://127.0.0.1:8000`。

## 业务模块

| 模块 | 目录 | 业务对象 | 主要字段 |
| --- | --- | --- | --- |
| 采集引擎 | `collector` | 采集任务 | 任务编号、目标网址、HTTP方法 |
| 页面抽取规则 | `crawlrule` | 抽取规则 | 规则编号、入口地址、列表选择器 |
| 内容解析器 | `parser` | 解析模板 | 模板编号、目标字段名、XPath表达式 |
| 增量采集 | `increment` | 增量游标 | 游标编号、来源标识、增量字段 |
| 限速调度 | `ratelimit` | 限速策略 | 策略编号、目标域名、并发上限 |
| 失败重试 | `retry` | 重试策略 | 策略编号、失败类型、最大重试次数 |
| 自动化流程 | `rpaflow` | 流程编排 | 流程编号、入口URL、页面定位器 |
| 验证码识别 | `captcha` | 识别方案 | 方案编号、验证码类型、识别服务地址 |
| 代理池管理 | `proxy` | 代理节点 | 节点编号、代理地址、代理协议 |
| 会话状态 | `session` | 会话配置 | 配置编号、登录网址、Cookie策略 |
| 链路分发 | `router` | 分发规则 | 规则编号、来源URL模式、目标引擎 |
| 采集校验 | `validate` | 校验规则 | 规则编号、校验目标字段、校验表达式 |
| 去重过滤 | `dedup` | 去重策略 | 策略编号、业务键列、相似度算法 |
| 格式归一 | `format` | 转换规则 | 规则编号、输入字段、输出字段 |
| 采集流水线 | `pipeline` | 流水线编排 | 流水线编号、阶段顺序、阶段名称 |
| 采集存储 | `storage` | 存储配置 | 配置编号、存储类型、连接地址 |
| 采集监控 | `monitor` | 监控指标 | 指标编号、监控目标、采集频率 |
| 定时调度 | `scheduler` | 调度计划 | 计划编号、Cron表达式、关联任务 |

## 约定

- 每个模块的前端页面在 `frontend/src/views/<模块>/index.vue`，后端接口在
  `backend/app/routers/<模块>.py`，业务规则在 `backend/app/services/<模块>.py`。
- 列表接口统一返回 `{ items, total, page, size }`，动作接口统一返回 `{ ok, message }`。
- 状态流转只允许在 `app/services` 里改，路由层不做业务判断。

领域：数据工程
子方向：数据采集、爬虫与RPA
