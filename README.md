# Web Backend-Guide

Docusaurus 를 이용한 웹 백엔드 개발자 가이드 문서 입니다.

### Start
```bash
    npm run start
```

---
## 디렉토리 구조

```
Backend-guide
├─ docs
│  ├─ database
│  │  ├─ database-basics.md
│  │  ├─ sql-basic-queries.md
│  │  └─ _category_.json
│  ├─ git
│  │  ├─ advanced.md
│  │  ├─ basics.md
│  │  ├─ branching.md
│  │  ├─ commands.md
│  │  ├─ remote.md
│  │  └─ _category_.json
│  ├─ index.md
│  ├─ internet
│  │  ├─ browser
│  │  │  ├─ overview.md
│  │  │  └─ _category_.json
│  │  ├─ core-concepts
│  │  │  ├─ client-server.md
│  │  │  ├─ data-transfer.md
│  │  │  ├─ http-https.md
│  │  │  ├─ ip-domain.md
│  │  │  ├─ isp.md
│  │  │  ├─ packet-switching.md
│  │  │  ├─ router-routing.md
│  │  │  ├─ tcp-ip.md
│  │  │  └─ _category_.json
│  │  ├─ dns
│  │  │  ├─ caching.md
│  │  │  ├─ how-it-works.md
│  │  │  ├─ importance.md
│  │  │  ├─ server-types.md
│  │  │  └─ _category_.json
│  │  ├─ hosting
│  │  │  ├─ overview.md
│  │  │  └─ _category_.json
│  │  └─ _category_.json
│  ├─ mongodb
│  │  ├─ advanced.md
│  │  ├─ basics.md
│  │  ├─ clustering.md
│  │  ├─ integration.md
│  │  ├─ modeling.md
│  │  ├─ overview.md
│  │  ├─ performance.md
│  │  ├─ security.md
│  │  ├─ setup.md
│  │  └─ _category_.json
│  ├─ mysql
│  │  ├─ advanced-features.md
│  │  ├─ backup-recovery.md
│  │  ├─ basics.md
│  │  ├─ other-technologies-integration.md
│  │  ├─ performance-optimization.md
│  │  ├─ replication-clustering.md
│  │  ├─ security-management.md
│  │  ├─ setup.md
│  │  ├─ transaction-management.md
│  │  └─ _category_.json
│  ├─ os
│  │  ├─ io-management.md
│  │  ├─ ipc.md
│  │  ├─ memory-management.md
│  │  ├─ network-basics.md
│  │  ├─ overview.md
│  │  ├─ posix-basics.md
│  │  ├─ process-management.md
│  │  ├─ threads-concurrency.md
│  │  └─ _category_.json
│  ├─ postgresql
│  │  ├─ advanced-features.md
│  │  ├─ backup-recovery.md
│  │  ├─ data-types.md
│  │  ├─ functions-triggers.md
│  │  ├─ overview.md
│  │  ├─ query-optimization.md
│  │  ├─ security.md
│  │  ├─ transaction-locks.md
│  │  └─ _category_.json
│  └─ python
│     ├─ basics.md
│     ├─ coding-style.md
│     └─ _category_.json
├─ docusaurus.config.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ sidebars.js
├─ src
│  ├─ components
│  │  └─ HomepageFeatures
│  │     ├─ index.js
│  │     └─ styles.module.css
│  ├─ css
│  │  └─ custom.css
│  └─ pages
│     ├─ index.js
│     ├─ index.module.css
│     └─ markdown-page.md
└─ static
   ├─ .nojekyll
   └─ img
      ├─ docusaurus-social-card.jpg
      ├─ docusaurus.png
      ├─ favicon.ico
      ├─ logo.svg
      ├─ undraw_docusaurus_mountain.svg
      ├─ undraw_docusaurus_react.svg
      └─ undraw_docusaurus_tree.svg

```