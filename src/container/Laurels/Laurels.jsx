import React from 'react';

import './Laurels.css';
import { images ,data} from '../../constants';
import { SubHeading } from '../../components';
import AwardItem from '../../components/AwardItem/AwardItem';

const Laurels = () => (
  <div className='app__laurels app__wrapper app__bg section__padding '>
      <div className='app__wrapper_info'>
        <SubHeading title={"Awards & recognition"} />
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__awards'>
          {
            data.awards.map((data)=><AwardItem data={data} />)
          }
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="welcome" />
      </div>
  </div>
);

export default Laurels;
