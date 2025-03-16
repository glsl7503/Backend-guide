---
sidebar_position: 1
---

# 인터넷 정의

**인터넷의 핵심 구성 요소**

- `IP 주소와 도메인 이름`
- `클라이언트와 서버`
- `HTPP와 HTTPS 웹 통신 프로토콜`
- `패킷 스위칭`
- `라우터와 경로 선택`
- `TCP/IP 프로토콜`
- `ISP`
- `최종적인 데이터 전송`

## Create your first React Page- 

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
