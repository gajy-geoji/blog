# Tech Blog

Astro와 Markdown/MDX로 만든 정적 기술 블로그입니다.

## 시작하기

Node.js 22.12 이상과 pnpm 11 이상을 권장합니다.

```bash
pnpm install
pnpm dev
```

개발 서버는 기본적으로 `http://localhost:4321`에서 열립니다.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 로컬 개발 서버 실행 |
| `pnpm build` | 프로덕션 사이트 빌드 |
| `pnpm preview` | 빌드 결과 미리보기 |
| `pnpm check` | Astro 및 TypeScript 검사 |

## 글 작성

`src/content/blog`에 `.md` 또는 `.mdx` 파일을 추가합니다.

```md
---
title: 새 글 제목
description: 글을 한 문장으로 소개합니다.
publishedAt: 2026-07-11
tags:
  - Astro
  - TypeScript
draft: false
---

본문을 작성합니다.
```

`draft: true`인 글은 개발 환경에서만 표시됩니다.

## 운영 전 설정

1. `src/config.ts`에서 블로그 이름, 설명, 작성자 정보를 변경합니다.
2. `SITE_URL` 환경 변수에 실제 배포 주소를 지정합니다.
3. `public/favicon.svg`를 원하는 파비콘으로 교체합니다.

```bash
SITE_URL=https://example.com pnpm build
```

## 구조

```text
src/
├── components/       재사용 UI
├── content/blog/     Markdown/MDX 글
├── layouts/          페이지 레이아웃
├── pages/            라우트와 RSS
└── styles/           전역 스타일
```
