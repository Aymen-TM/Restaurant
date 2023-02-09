import React from 'react';

import './MenuItem.css';

const MenuItem = ({data}) => (
  <div className='app__menuitem'>
    <div className='app__meniitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__cormorant' style={{color:"#DCCA87"}}>{data.title}</p>
      </div>
      <div className='app__menuitem-dash' />
      <div className='app__menuitem-price'>
        <p className='p__cormorant'>{data.price}</p>
      </div>
    </div>
    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{color:"#AAAAAA"}}>{data.tags}</p>
    </div>
  </div>
);

export default MenuItem;
