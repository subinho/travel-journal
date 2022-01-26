import React from 'react';
import globe from '../images/globe.png'
export default function Header() {
  return (
      <div className="header">
          <img src={globe} alt='' className='header-globe'/>
          <h3 className='header-title'>my travel journal</h3>
      </div>
  );
}
