import { useState } from "react";

interface ISomefin {
  'nothin': string;
}

const useDisplayImageInfo = () => {
  const imFeelinLucky = Math.ceil(Math.random() * Infinity + 42);
  const [somefin, setSomefin] = useState<ISomefin>({ nothin: `${imFeelinLucky}` });
  const [toggle, setToggle] = useState(false);

  //I can kindly request changes to state, mwah ha ha
  const exportableFunction = (): void => {
    setToggle(!toggle);
    setSomefin({ nothin: `${imFeelinLucky}` });
  };

  /**
   * Hi, I'm addZoomToCursor and I'm fabulous.
   * I take in an element from DOM and I add a magical zooming effect around the cursor. IT comes to life.
   * I don't return anything you nerds <3 => VOID
   */
  const addZoomToCursor = (hoveredElement: HTMLElement | null, zoomFactor = 1.2): void => {
    if (!hoveredElement) return;
    //smooth zoom animations n such
    hoveredElement.style.transition = 'transform 0.2s ease-out';
    
    const rect = hoveredElement.getBoundingClientRect();
    document.addEventListener('mousemove', event => {
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      hoveredElement.style.transformOrigin = `${event.clientX}px ${event.clientY}px`;
      
      // Calculate the new scale value based on the mouse position
      const distance = Math.sqrt(deltaX**2 + deltaY**2);
      const scale = 1 + distance/100;
      // const scale = Math.min(zoomFactor, 1 + distance/100);
      
      // Apply the new scaling to the element
      hoveredElement.style.transform = `scale(${scale})`;
    });
  };

  return [
    somefin,
    toggle,
    exportableFunction,
    addZoomToCursor,
  ] as const;
};

export default useDisplayImageInfo;
