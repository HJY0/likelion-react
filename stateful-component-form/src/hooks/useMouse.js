import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

// 에너테이션 Annotation

/**
 * 사용자의 마우스 x, y위치 값을 반환하는 튜
 * @returns {{x: number, y: number }} 마우스 x, y 위치
 */

export function useMouse(wait = 1000) {
  const [x, updateX] = useState(0);
  const [y, updateY] = useState(0);

  useEffect(() => {
    const EVENT_TYPE = 'mousemove';
    const handleMouseMove = debounce((e) => {
      updateX(e.pageX);
      updateY(e.pageY);
    }, wait);

    // 이벤트 구독 (subscription)
    globalThis.addEventListener(EVENT_TYPE, handleMouseMove);

    // 이벤트 구독 해지 (clean up)
    return () => {
      globalThis.removeEventListener(EVENT_TYPE, handleMouseMove);
    };
  }, []);

  // return [x, y]; // 배열, 객체 둘 다 내보낼 수 있음. 하지만 받을 때 배열은 순서가 중요함
  return { x, y }; // { x: 0, y: 0 }
}

// const [xPos, yPos] = useMouse();
// const { x, y } = useMouse();
