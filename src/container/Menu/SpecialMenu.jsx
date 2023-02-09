import React from 'react';

import './SpecialMenu.css';
import { SubHeading,MenuItem } from '../../components';
import { images,data} from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialmenu section__padding flex__center' id='#menu'>
    <div className='app__specialmenu-title'>
      <SubHeading title={"Menu that fits you palatte"} />
      <h2 className='headtext__cormorant'>Today's Special</h2>
    </div>
    <div className='app__specialmenu-menu'>
      <div className='app__specialmenu-menu_wine'> 
        <p className='app__specialmenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialmenu_menu_items'> 
        {data.wines.map((data)=>(
          <MenuItem key={data.title} data={data} />
        ))}
        </div>
      </div>
      <div className='app__specialmenu_menu-img'>
        <img src={images.menu} alt="menu" />
      </div>
      <div className='app__specialmenu-menu_cocktails'> 
        <p className='app__specialmenu-menu_heading'>Cocktails</p>
        <div className='app__specialmenu_menu_items'> 
        {data.cocktails.map((data)=>(
          <MenuItem key={data.title} data={data} />
        ))}
        </div>
      </div>

    </div>
    <button className='custom__button' style={{marginTop:"4rem"}}>View More</button>
  </div>
);

export default SpecialMenu;
