import type { ToolType } from "../../types";
import styles from "./Toolbar.module.css";

// 도구 목록 정의
const tools: { type: ToolType; icon: string; shortcut: string }[] = [
  { type: "selection", icon: "↖", shortcut: "V" },
  { type: "rectangle", icon: "□", shortcut: "R" },
  { type: "ellipse", icon: "○", shortcut: "O" },
  { type: "diamond", icon: "◇", shortcut: "D" },
  { type: "line", icon: "╱", shortcut: "L" },
  { type: "arrow", icon: "→", shortcut: "A" },
  { type: "freedraw", icon: "✎", shortcut: "P" },
  { type: "text", icon: "T", shortcut: "T" },
  { type: "eraser", icon: "⌫", shortcut: "E" },
];

interface ToolbarProps {
  currentTool: ToolType;
  onToolChange: (tool: ToolType) => void;
}

export function Toolbar({ currentTool, onToolChange }: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      {tools.map((tool) => (
        <button
          key={tool.type}
          className={`${styles.toolButton} ${
            currentTool === tool.type ? styles.active : ""
          }`}
          onClick={() => onToolChange(tool.type)}
          title={`${tool.type} (${tool.shortcut})`}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
}
