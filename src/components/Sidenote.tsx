import { useState } from 'react';
import './Sidenote.css';
import { CheckCircle, Info, AlertTriangle, Gift } from 'react-feather';

type SidenoteProps = {
  type: string;
  title: string;
  children: React.ReactNode;
  expand?: boolean;
};

const plzGiveSidenoteIcon: any = {
  'notice':  <div className='sidenote-icon'><Info size={32} className='sidenote-icon-notice' /></div>,
  'warning':  <div className='sidenote-icon'><AlertTriangle size={32} className='sidenote-icon-warning'/></div>,
  'error':  <div className='sidenote-icon'><AlertTriangle size={32} className='sidenote-icon-error'/></div>,
  'success':  <div className='sidenote-icon'><CheckCircle  size={32} className='sidenote-icon-success'/></div>,
  'tiedye':  <div className='sidenote-icon'><Gift  size={32} className='sidenote-icon-gift'/></div>,
};

const Sidenote = ({ type, title, children, expand = false }: SidenoteProps) => {
  //user clicks on sidenote => toggle expanding content section (right)
  const [isExpanded, setIsExpanded] = useState(expand);
  return (
    <aside
      className={`wrapper ${type}`}
      id={type === 'tiedye' ? 'never-say-never' : ''}
      onClick={() => setIsExpanded(!isExpanded)}>
      <div className='left'>
        {type ? plzGiveSidenoteIcon[type] : null}
      </div>
      <div className={`right ${isExpanded ? 'expand-right' : ''}`}>
        <div className="sidenote-title">{title}</div>
        <>{children}</>
      </div>
    </aside>
  )
};

export default Sidenote;
