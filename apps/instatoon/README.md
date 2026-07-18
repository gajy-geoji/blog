# Instatoon workspace

인스타툰 제작에 사용하는 독립 작업공간입니다. 현재는 생성에 필요한 공유 자료를 관리하며, 이 디렉터리의 문서와 이미지는 블로그에 게시되거나 Astro 콘텐츠 컬렉션으로 처리되지 않습니다.

## 구조

```text
apps/instatoon/
├── characters/             캐릭터별 설정과 기준 이미지
│   └── <character-slug>/
│       ├── profile.md       정체성, 성격과 외형
│       ├── reference-guide.md
│       └── assets/
├── prompts/                재사용 가능한 생성 프롬프트
└── scenarios/              에피소드별 시나리오와 생성 결과
    └── <scenario-slug>/
        ├── scenario.md
        └── assets/
```

## 작성 원칙

- 파일과 디렉터리 이름은 소문자 kebab-case를 사용합니다.
- 캐릭터 자체의 설정과 생성·표현 규칙을 분리합니다.
- 공통 프롬프트는 `prompts`에서 관리하고, 에피소드별 변형만 해당 시나리오에 기록합니다.
- 기준 이미지 원본을 보존하고 역할이 드러나는 파일명을 사용합니다.
