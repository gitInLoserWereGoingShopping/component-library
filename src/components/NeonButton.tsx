import { ButtonHTMLAttributes, memo } from "react";

//extend behavior/interface of native HTML <button>
interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  neonPink?: string;
  neonGreen?: string;
  neonPurple?: string;
  // className?: string;
}

const NeonButton = ({
  label,
  neonPink = '#ff00ff',
  neonGreen = 'mediumspringgreen',
  neonPurple = 'mediumslateblue',
  ...rest //sprinkle in the ...rest of the props onto the <button>'s attributes below
}: NeonButtonProps): JSX.Element => {
  //encapsulate css style locally + in-line styling
  const baseStyle = {
    backgroundColor: neonPurple,
    color: 'mediumspringgreen',
    border: 'none',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    cursor: 'pointer',
    boxShadow: `0 0 10px ${neonGreen}, 0 0 23px ${neonPink}`
  };
  return (
    <button {...rest} style={baseStyle} /*className={className}*/>
      {label}
    </button>
  );
};

//re-renders if NeonButtonProps change
export default memo(NeonButton);
