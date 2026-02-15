# Canvas PWA - Product Requirements Document

## 프로젝트 개요

**프로젝트명:** Canvas PWA (가칭: SketchBoard)
**목표:** Excalidraw를 참고한 손그림 스타일 화이트보드/스케치 웹앱
**플랫폼:** Progressive Web App (PWA)
**기술 스택:** React + TypeScript + Vite

---

## 1. 비전 및 목표

### 1.1 비전
브라우저에서 바로 사용할 수 있는 가볍고 직관적인 화이트보드 앱. 오프라인에서도 작동하며, 설치 없이 아이디어를 빠르게 스케치할 수 있다.

### 1.2 핵심 가치
- **즉시성**: 열면 바로 그리기 시작
- **단순함**: 최소한의 UI, 최대한의 캔버스
- **접근성**: 모든 디바이스에서 동작 (데스크톱/모바일/태블릿)
- **오프라인 퍼스트**: 인터넷 없이도 완전히 동작

---

## 2. 타겟 사용자

| 페르소나 | 니즈 |
|---------|------|
| 개발자 | 빠른 아키텍처 스케치, 플로우 다이어그램 |
| 디자이너 | 와이어프레임, 아이디어 스케치 |
| 학생 | 노트 정리, 개념 시각화 |
| 일반 사용자 | 간단한 그림, 메모 |

---

## 3. 기능 요구사항

### 3.1 Phase 1 - MVP (핵심 기능)

#### 3.1.1 캔버스 기본
- [ ] 무한 캔버스 (Infinite Canvas)
- [ ] 줌 인/아웃 (마우스 휠, 핀치 제스처)
- [ ] 패닝 (드래그로 캔버스 이동)
- [ ] 그리드 표시 (토글 가능)

#### 3.1.2 도형 도구
| 도구 | 설명 | 단축키 |
|------|------|--------|
| Selection | 요소 선택/이동/리사이즈 | `V` |
| Rectangle | 사각형 그리기 | `R` |
| Ellipse | 원/타원 그리기 | `O` |
| Diamond | 마름모 그리기 | `D` |
| Line | 직선 그리기 | `L` |
| Arrow | 화살표 | `A` |
| Freedraw | 자유 그리기 (펜) | `P` |
| Text | 텍스트 입력 | `T` |
| Eraser | 지우개 | `E` |

#### 3.1.3 스타일링
- [ ] 선 색상 선택
- [ ] 배경 색상 선택
- [ ] 선 굵기 조절 (1px, 2px, 4px)
- [ ] 선 스타일 (실선, 점선, 대시)
- [ ] 채우기 스타일 (없음, 단색, 빗금, 점)
- [ ] 불투명도 조절

#### 3.1.4 편집 기능
- [ ] Undo/Redo (Ctrl+Z, Ctrl+Y)
- [ ] 복사/붙여넣기 (Ctrl+C, Ctrl+V)
- [ ] 삭제 (Delete, Backspace)
- [ ] 복제 (Ctrl+D)
- [ ] 그룹/그룹 해제
- [ ] 레이어 순서 변경 (앞으로/뒤로)

#### 3.1.5 저장 및 내보내기
- [ ] 로컬스토리지 자동 저장
- [ ] `.json` 형식 저장/불러오기
- [ ] PNG 내보내기
- [ ] SVG 내보내기
- [ ] 클립보드로 복사

#### 3.1.6 PWA 기능
- [ ] Service Worker (오프라인 지원)
- [ ] Web App Manifest
- [ ] 설치 프롬프트 (Add to Home Screen)
- [ ] 오프라인 배너/상태 표시

### 3.2 Phase 2 - 확장 기능

#### 3.2.1 고급 도구
- [ ] 이미지 삽입 (드래그 앤 드롭)
- [ ] 스티커/이모지
- [ ] 프레임 (영역 그룹화)
- [ ] 잠금 기능

#### 3.2.2 UX 개선
- [ ] 다크 모드
- [ ] 키보드 단축키 커스터마이징
- [ ] 최근 색상 기록
- [ ] 스냅 기능 (요소 정렬 가이드)

#### 3.2.3 공유
- [ ] URL로 공유 (읽기 전용)
- [ ] QR 코드 생성

### 3.3 Phase 3 - 협업 (추후)

- [ ] 실시간 협업 (WebSocket/WebRTC)
- [ ] 사용자 커서 표시
- [ ] 동시 편집
- [ ] End-to-End 암호화

---

## 4. 비기능 요구사항

### 4.1 성능
| 항목 | 목표 |
|------|------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| 캔버스 렌더링 FPS | 60fps |
| 요소 1000개 지원 | 버벅임 없이 |

### 4.2 호환성
- **브라우저**: Chrome, Firefox, Safari, Edge (최신 2버전)
- **모바일**: iOS Safari, Android Chrome
- **해상도**: 320px ~ 4K 반응형

### 4.3 접근성
- 키보드 네비게이션 지원
- 스크린 리더 기본 지원
- 고대비 모드

---

## 5. 기술 아키텍처

### 5.1 기술 스택

```
Frontend
├── React 18+
├── TypeScript 5+
├── Vite (빌드 도구)
├── Zustand (상태 관리)
├── Rough.js (손그림 스타일 렌더링)
└── vite-plugin-pwa (PWA 지원)

Styling
├── CSS Modules
└── CSS Variables (테마)

Storage
├── LocalStorage (설정)
├── IndexedDB (도면 데이터)
└── File System Access API (파일 저장)
```

### 5.2 핵심 데이터 구조

```typescript
interface CanvasElement {
  id: string;
  type: 'rectangle' | 'ellipse' | 'diamond' | 'line' | 'arrow' | 'freedraw' | 'text';
  x: number;
  y: number;
  width: number;
  height: number;
  angle: number;
  strokeColor: string;
  backgroundColor: string;
  strokeWidth: number;
  strokeStyle: 'solid' | 'dashed' | 'dotted';
  fillStyle: 'none' | 'solid' | 'hachure' | 'cross-hatch';
  opacity: number;
  points?: [number, number][]; // freedraw, line용
  text?: string; // text용
  groupId?: string;
  isLocked: boolean;
  version: number;
}

interface CanvasState {
  elements: CanvasElement[];
  selectedIds: string[];
  viewState: {
    zoom: number;
    scrollX: number;
    scrollY: number;
  };
  appState: {
    currentTool: ToolType;
    currentStyle: StyleOptions;
  };
}
```

---

## 6. UI/UX 설계

### 6.1 레이아웃

```
┌─────────────────────────────────────────────────┐
│  [Logo]  [File▾] [Edit▾] [View▾]    [Share] [⚙] │  ← 헤더
├──────┬──────────────────────────────────────────┤
│  ↖   │                                          │
│  □   │                                          │
│  ○   │                                          │
│  ◇   │           무한 캔버스 영역                │
│  ╱   │                                          │
│  →   │                                          │
│  ✎   │                                          │
│  T   │                                          │
│  ⌫   │                                          │
├──────┴──────────────────────────────────────────┤
│  [Colors] [Stroke] [Fill] [Opacity]   [−][100%][+] │  ← 하단 툴바
└─────────────────────────────────────────────────┘
```

### 6.2 디자인 원칙
1. **미니멀리즘**: 캔버스가 주인공, UI는 조연
2. **컨텍스트 메뉴**: 필요할 때만 옵션 표시
3. **빠른 접근**: 자주 쓰는 기능은 단축키와 1클릭
4. **시각적 피드백**: 호버, 선택, 드래그 상태 명확히

---

## 7. 성공 지표 (KPI)

| 지표 | 목표 |
|------|------|
| Lighthouse PWA 점수 | 100점 |
| Lighthouse Performance | > 90점 |
| 첫 드로잉까지 시간 | < 3초 |
| 오프라인 동작률 | 100% |

---

## 8. 참고 자료

- [Excalidraw GitHub](https://github.com/excalidraw/excalidraw)
- [Rough.js](https://roughjs.com/) - 손그림 스타일 렌더링
- [Perfect Freehand](https://github.com/steveruizok/perfect-freehand) - 자연스러운 펜 스트로크
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)

---

## 9. 리스크 및 고려사항

| 리스크 | 대응 |
|--------|------|
| 캔버스 성능 이슈 | 가상화, 청킹 렌더링 적용 |
| 모바일 터치 UX | 전용 제스처 시스템 구현 |
| 브라우저 호환성 | Polyfill, 기능 감지 |
| 대용량 파일 | IndexedDB + 압축 |

---

*문서 버전: 1.0*
*최종 수정: 2026-02-15*
