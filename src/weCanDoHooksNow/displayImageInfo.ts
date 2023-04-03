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

  return [somefin, toggle, exportableFunction] as const;
};

export default useDisplayImageInfo;
