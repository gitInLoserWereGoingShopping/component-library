import React from 'react';
import './Divider.css';
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'react-feather';

const Divider = () => {
  return (
    <div className='divider'>
      <div className='divider-icons'>
        <ChevronUp size={24}/>
        <ChevronUp size={24}/>
        <ChevronDown size={24}/>
        <ChevronDown size={24}/>
        <ChevronLeft size={24}/>
        <ChevronRight size={24}/>
        <ChevronLeft size={24}/>
        <ChevronRight size={24}/>
        🅱️<a className='divider-link' href='https://jobbascript.com/game.html' target='_blank' rel='noopener noreferrer'>🅰️</a>
      </div>
    </div>
  );
};

export default Divider;