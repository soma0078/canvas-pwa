# Canvas PWA - Handoff Document

## 프로젝트 개요

Excalidraw 스타일의 손그림 화이트보드/스케치 PWA 앱

## 기술 스택

| 기술       | 버전 | 용도          |
| ---------- | ---- | ------------- |
| React      | 19.x | UI 프레임워크 |
| TypeScript | 5.9  | 타입 시스템   |
| Vite       | 7.x  | 빌드 도구     |
| Zustand    | 5.x  | 상태 관리     |

## 폴더 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Canvas/          # 캔버스 영역
│   ├── Toolbar/         # 좌측 도구 모음
│   └── UI/              # 공통 UI 컴포넌트
├── features/            # 기능별 로직
│   ├── drawing/         # 그리기 관련
│   └── history/         # Undo/Redo
├── hooks/               # 커스텀 훅
├── stores/              # Zustand 스토어
├── types/               # TypeScript 타입 정의
└── utils/               # 유틸리티 함수
```

## 컴포넌트 컨벤션

### 파일 구조

```
ComponentName/
├── ComponentName.tsx       # 컴포넌트 본체
├── ComponentName.module.css # 스타일 (CSS Modules)
└── index.ts                # export
```

### 네이밍

- 컴포넌트: PascalCase (`Canvas.tsx`)
- 훅: camelCase, `use` 프리픽스 (`useCanvas.ts`)
- 타입: PascalCase (`CanvasElement`)
- CSS 클래스: camelCase (CSS Modules)

### import 순서

```tsx
// 1. React/외부 라이브러리
import { useState } from "react";

// 2. 내부 컴포넌트
import { Canvas } from "./components/Canvas";

// 3. 스타일
import "./App.css";

// 4. 타입 (type import)
import type { ToolType } from "./types";
```

## 타입 정의

### ToolType

```typescript
type ToolType =
  | "selection" // 선택
  | "rectangle" // 사각형
  | "ellipse" // 원/타원
  | "diamond" // 마름모
  | "line" // 직선
  | "arrow" // 화살표
  | "freedraw" // 자유 그리기
  | "text" // 텍스트
  | "eraser"; // 지우개
```

### CanvasElement

```typescript
interface CanvasElement {
  id: string;
  type: Exclude<ToolType, "selection" | "eraser">;
  x: number;
  y: number;
  width: number;
  height: number;
  strokeColor: string;
  backgroundColor: string;
  strokeWidth: number;
  opacity: number;
  points?: [number, number][]; // freedraw, line
  text?: string; // text
}
```

## 레이아웃 구조

```
┌─────────────────────────────────────────────────┐
│  Header (48px)                                  │
├──────┬──────────────────────────────────────────┤
│      │                                          │
│ Tool │              Canvas                      │
│ bar  │           (flex: 1)                      │
│      │                                          │
├──────┴──────────────────────────────────────────┤
│  Footer/StatusBar (32px)                        │
└─────────────────────────────────────────────────┘
```

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 실행
```

## 진행 상황

### 완료

- [x] Step 1-1: Vite + React + TS 셋업
- [x] Step 1-2: 폴더 구조 & 기본 레이아웃

### 진행 예정

- [ ] Step 1-3: Zustand 상태관리 기초
- [ ] Step 2: 캔버스 기초 (Canvas API, 줌/패닝)
- [ ] Step 3: 도형 도구
- [ ] Step 4: 선택 & 편집
- [ ] Step 5: 스타일 & UI
- [ ] Step 6: 저장 & PWA

## 참고 문서

- [PRD](docs/PRD.md) - 상세 요구사항
- [Excalidraw](https://github.com/excalidraw/excalidraw) - 참고 프로젝트
