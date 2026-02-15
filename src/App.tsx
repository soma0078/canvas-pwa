import { useState } from "react";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";

import "./App.css";
import type { ToolType } from "./types";

function App() {
  // 현재 선택된 도구 상태
  const [currentTool, setCurrentTool] = useState<ToolType>("selection");

  return (
    <div className="app">
      {/* 헤더 */}
      <header className="header">
        <div className="logo">Canvas PWA</div>
        <div className="header-actions">
          <span className="tool-hint">현재 도구: {currentTool}</span>
        </div>
      </header>

      {/* 메인 영역 */}
      <main className="main">
        {/* 좌측 툴바 */}
        <Toolbar currentTool={currentTool} onToolChange={setCurrentTool} />

        {/* 캔버스 */}
        <Canvas />
      </main>

      {/* 하단 상태바 */}
      <footer className="footer">
        <span>100%</span>
      </footer>
    </div>
  );
}

export default App;
