import { useState, useRef, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [initialized, setInitialized] = useState(false);

  // Initialize position on mount
  useEffect(() => {
    if (containerRef.current && !initialized) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const initialX = rect.width * 0.7;
      const initialY = rect.height * 0.6;
      setPosition({ x: initialX, y: initialY });
      setInitialized(true);
    }
  }, [initialized]);

  const moveButton = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Button dimensions (approximate)
    const buttonWidth = 150;
    const buttonHeight = 60;
    const padding = 20;

    // Calculate safe bounds
    const minX = buttonWidth / 2 + padding;
    const maxX = rect.width - buttonWidth / 2 - padding;
    const minY = buttonHeight / 2 + padding;
    const maxY = rect.height - buttonHeight / 2 - padding;

    // Generate random position within bounds
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setPosition({ x: newX, y: newY });
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;

    const button = e.currentTarget as HTMLElement;
    const buttonRect = button.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate distance from pointer to button center
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    const distance = Math.sqrt(
      Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2)
    );

    // Move if pointer is within 100px
    if (distance < 100) {
      moveButton();
    }
  }, [moveButton]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    moveButton();
  }, [moveButton]);

  return {
    position,
    handlePointerMove,
    handleTouchStart,
    containerRef,
  };
}
