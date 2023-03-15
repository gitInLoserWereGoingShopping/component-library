import './Sidenote.css';

type SidenoteProps = {
  type: string;
  title: string;
  children: React.ReactNode;
};

const Sidenote = ({ type, title, children }: SidenoteProps) => (
  <aside className={`wrapper ${type}`} /*draggable*/>
    <h3 className="title">{title}</h3>
    <>{children}</>
  </aside>
);

export default Sidenote;
