import './Sidenote.css';
import { CheckCircle, Info, AlertTriangle, Gift } from 'react-feather';

type SidenoteProps = {
  type: string;
  title: string;
  children: React.ReactNode;
};

const plzGiveSidenoteIcon: any = {
  'notice':  <div className='sidenote-icon'><Info size={32} className='sidenote-icon-notice' /></div>,
  'warning':  <div className='sidenote-icon'><AlertTriangle size={32} className='sidenote-icon-warning'/></div>,
  'error':  <div className='sidenote-icon'><AlertTriangle size={32} className='sidenote-icon-error'/></div>,
  'success':  <div className='sidenote-icon'><CheckCircle  size={32} className='sidenote-icon-success'/></div>,
  'tiedye':  <div className='sidenote-icon'><Gift  size={32} className='sidenote-icon-gift'/></div>,
};

const Sidenote = ({ type, title, children }: SidenoteProps) => (
  <aside className={`wrapper ${type}`} id={type === 'tiedye' ? 'never-say-never' : ''}/*draggable*/>
    <div className='left'>
      {type ? plzGiveSidenoteIcon[type] : null}
    </div>
    <div className='right'>
      <div className="title">{title}</div>
      <>{children}</>
    </div>
  </aside>
);

export default Sidenote;
