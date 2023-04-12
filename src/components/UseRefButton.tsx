import { useRef } from 'react';

export default function UseRefButton() {
  const buttonRef = useRef<null | HTMLButtonElement>(null);
  const refCount = useRef<number>(0);

  function handleClick() {
    const btnRefStyle = buttonRef.current?.style;
    if (btnRefStyle) {
      btnRefStyle.transform = refCount.current % 2 === 0
        ? 'translate3d(1px, -2px, 0px)'
        : '';
      btnRefStyle.boxShadow = refCount.current % 2 === 0
        ? '0 0 8px 3px mediumspringgreen, 0 0 23px 1px #ff00ff'
        : '';
    }
    refCount.current = refCount.current + 1;
  }

  return (
    <button ref={buttonRef} onClick={handleClick}>
      Click me
    </button>
  );
}
