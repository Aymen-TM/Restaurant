import React, { useRef } from 'react';

import './Gallery.css';
import { SubHeading } from '../../components';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import { images } from '../../constants';


const Gallery = () =>{
  const scrollRef = useRef(null)
  const gallery = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

  const scroll= (direction)=>{
    const {current} = scrollRef

    if(direction === 'left'){
      current.scrollLeft -=300
    }
    if(direction === 'right'){
      current.scrollLeft +=300
    }
  }
  return (
    <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title={"Instagram"} />
      <h2 className='headtext__cormorant'>Photo Gallery</h2>
      <p className='p__opensans' style={{color:"#AAAAAA"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button className='custom__button' style={{marginTop:"24px"}}>Know More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {
          gallery.map((img)=>
          <div className='app_galley-image_card flex__center'>
            <img src={img}  alt="gallery images"/>
            <BsInstagram className='app_galley-image_card_icon' />
          </div>
          )
        }
      </div>
      <div className='app__gallery-images_arrow' >
        <BsArrowLeftShort className='app__gallery-images_arrow-icon' onClick={()=>scroll('left')} />
        <BsArrowRightShort className='app__gallery-images_arrow-icon' onClick={()=>scroll('right')}/>
      </div>
    </div>
  </div>
  )
};

export default Gallery;
