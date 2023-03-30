import { ButtonHTMLAttributes, memo } from "react";
import './NeonButton.css';

//extend behavior/interface of native HTML <button>
interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const NeonButton = ({ label, ...rest}: NeonButtonProps): JSX.Element => {
  return (
    <button {...rest} className={'neonBtnBaseStyle'}>
      {label}
    </button>
  );
};

//re-renders if NeonButtonProps change
export default memo(NeonButton);
