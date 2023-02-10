import React, { useRef, useState } from 'react';

import './Intro.css';
import { meal } from '../../constants';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'

const Intro = () => {
  const [playvideo, setPlayvideo] = useState(false)
  const vidRef = useRef()

  const handlVideo =()=>{
    setPlayvideo(!playvideo)
    if(playvideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }
  
  return(
  <div className='app__video '>
    <video ref={vidRef} src={meal} type="video/mp4" loop controls={false} muted />
    <div className='app__video-overlay flex__center'>
      <div className='app__video-circle flex__center' onClick={handlVideo}>
        {
          playvideo?<BsPauseFill color='#fff' fontSize={30} />:<BsFillPlayFill color='#fff' fontSize={30} />
        }
      </div>
    </div>
  </div>

  )
}

export default Intro;
