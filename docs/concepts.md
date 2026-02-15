# 핵심 개념

개발 중 등장하는 개념 설명 모음

---

## getContext('2d')

캔버스에 그림을 그리기 위한 도구 모음(`ctx`)을 꺼내는 메서드.

```js
const ctx = canvas.getContext("2d");

ctx.fillRect(10, 10, 100, 50); // 사각형
ctx.arc(50, 50, 30, 0, Math.PI * 2); // 원
ctx.fillText("hello", 10, 10); // 텍스트
```

`'2d'` 외에 `'webgl'`(3D)도 있지만 이 앱은 2D만 사용한다.

---

## 버퍼 (Buffer)

**데이터를 임시로 저장하는 메모리 공간.**

Canvas에서는 "그림 데이터를 저장하는 메모리"라고 이해하면 된다.

### 비유

```
버퍼 = 실제 종이 크기 (A4, A3...)
CSS  = 종이를 사진으로 찍어서 화면에 보여주는 크기
```

A4 종이에 그린 그림을 A0 크기로 화면에 띄우면 흐릿하게 보이는 것과 동일한 원리.

```js
canvas.width = 800;
canvas.height = 600;
// → 메모리에 800 × 600 = 480,000개의 픽셀 공간 생성
```

`ctx.fillRect()` 같은 명령은 이 메모리에 색상 데이터를 쓰고, 화면은 이 메모리를 읽어서 표시한다.

---

## useRef

React에서 DOM 요소에 직접 접근할 때 사용하는 훅.

```tsx
const canvasRef = useRef<HTMLCanvasElement>(null);

// JSX에 연결
<canvas ref={canvasRef} />;

// DOM 접근
const canvas = canvasRef.current;
```

React는 보통 DOM을 직접 건드리지 않지만, `<canvas>`는 JS로 직접 그려야 하므로 `useRef`로 DOM 요소를 가져온다.

---

## useEffect

컴포넌트가 화면에 마운트된 후 실행되는 훅.

```tsx
useEffect(() => {
  // 마운트 후 실행할 코드

  return () => {
    // cleanup: 컴포넌트 언마운트 시 실행
  };
}, []); // 빈 배열 = 마운트 시 딱 1번만 실행
```

이벤트 리스너 등록/해제, DOM 조작, 외부 라이브러리 초기화 등에 사용한다.

---

## Zustand

상태(state)와 액션(action)을 하나의 스토어에서 관리하는 전역 상태 관리 라이브러리.

스토어는 **상태(값) + 액션(값을 바꾸는 함수)** 두 가지로 구성된다.

### 스토어 생성

```ts
const useStore = create<StoreType>((set) => ({
  // 상태 (초기값)
  count: 0,

  // 액션
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

`create`에 함수를 넘기면 훅이 만들어진다. `set`이 상태를 바꾸는 유일한 방법이다.

### 상태 읽기 — selector

```ts
// 필요한 값만 골라 구독
const count = useStore((state) => state.count);
```

selector로 구독한 값이 바뀔 때만 컴포넌트가 리렌더링된다.

### 상태 바꾸기

```ts
// 단순 교체
set({ currentTool: "rectangle" });

// 이전 값 기반 업데이트
set((state) => ({ styleOptions: { ...state.styleOptions, ...options } }));
```
