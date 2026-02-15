// 도구 타입
export type ToolType =
  | 'selection'
  | 'rectangle'
  | 'ellipse'
  | 'diamond'
  | 'line'
  | 'arrow'
  | 'freedraw'
  | 'text'
  | 'eraser';

// 캔버스 요소 타입
export interface CanvasElement {
  id: string;
  type: Exclude<ToolType, 'selection' | 'eraser'>;
  x: number;
  y: number;
  width: number;
  height: number;
  strokeColor: string;
  backgroundColor: string;
  strokeWidth: number;
  opacity: number;
  points?: [number, number][]; // freedraw, line용
  text?: string; // text용
}

// 뷰 상태 (줌, 스크롤)
export interface ViewState {
  zoom: number;
  scrollX: number;
  scrollY: number;
}

// 스타일 옵션
export interface StyleOptions {
  strokeColor: string;
  backgroundColor: string;
  strokeWidth: number;
  opacity: number;
}
