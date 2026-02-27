import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)` }}
    >
      <div className="h-3 w-3 rounded-full bg-blue-500" />
    </div>
  );
};

export default CustomCursor;