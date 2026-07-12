# Tech Blog Workspace

Astro 기술 블로그와 글에 관련된 POC를 함께 관리하는 pnpm 모노레포입니다.

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
| `pnpm dev` | 블로그 개발 서버 실행 |
| `pnpm build` | 블로그 프로덕션 빌드 |
| `pnpm preview` | 블로그 빌드 결과 미리보기 |
| `pnpm check` | 블로그 Astro 및 TypeScript 검사 |
| `pnpm build:all` | 모든 workspace 패키지 빌드 |
| `pnpm check:all` | 모든 workspace 패키지 검사 |
| `pnpm --filter <name> <script>` | 특정 앱, POC 또는 패키지의 스크립트 실행 |

## 글 작성

`apps/blog/src/content/blog`에 `.md` 또는 `.mdx` 파일을 추가합니다.

```md
---
title: 새 글 제목
description: 글을 한 문장으로 소개합니다.
publishedAt: 2026-07-12
tags:
  - Astro
  - TypeScript
draft: true
---

본문을 작성합니다.
```

새 글은 `draft: true`로 시작합니다. 초안은 개발 환경에서만 표시됩니다.

## POC 작성

`pocs/<slug>`에 독립적인 pnpm 패키지를 만들고 `package.json`과 README를 포함합니다. README에는 가설, 관련 포스트, 실행법, 검증 방법, 제한사항과 현재 상태를 기록합니다.

재사용이 검증된 코드만 `packages`로 옮기고 다른 workspace에서는 `workspace:*` 의존성으로 연결합니다.

## 운영 전 설정

1. `apps/blog/src/config.ts`에서 블로그 이름, 설명, 작성자 정보를 변경합니다.
2. `SITE_URL` 환경 변수에 실제 배포 주소를 지정합니다.
3. `apps/blog/public/favicon.svg`를 원하는 파비콘으로 교체합니다.

```bash
SITE_URL=https://example.com pnpm build
```

## 구조

```text
apps/
└── blog/              Astro 블로그
pocs/                  글과 아이디어를 검증하는 독립 실험
packages/              검증된 재사용 패키지
docs/                  편집 가이드와 공유 문서
.agents/               저장소 범위 Codex Skill
```
