import { create } from 'zustand';
import type { ToolType, StyleOptions, CanvasElement, ViewState } from '../types';

interface CanvasStore {
  // 현재 선택된 도구
  currentTool: ToolType;
  setCurrentTool: (tool: ToolType) => void;

  // 현재 스타일 설정
  styleOptions: StyleOptions;
  setStyleOptions: (options: Partial<StyleOptions>) => void;

  // 캔버스 요소 목록
  elements: CanvasElement[];
  addElement: (element: CanvasElement) => void;

  // 뷰 상태 (줌, 스크롤)
  viewState: ViewState;
  setViewState: (state: Partial<ViewState>) => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  // 초기값
  currentTool: 'selection',
  styleOptions: {
    strokeColor: '#000000',
    backgroundColor: 'transparent',
    strokeWidth: 2,
    opacity: 100,
  },
  elements: [],
  viewState: {
    zoom: 1,
    scrollX: 0,
    scrollY: 0,
  },

  // 액션
  setCurrentTool: (tool) => set({ currentTool: tool }),

  setStyleOptions: (options) =>
    set((state) => ({
      styleOptions: { ...state.styleOptions, ...options },
    })),

  addElement: (element) =>
    set((state) => ({
      elements: [...state.elements, element],
    })),

  setViewState: (newState) =>
    set((state) => ({
      viewState: { ...state.viewState, ...newState },
    })),
}));
