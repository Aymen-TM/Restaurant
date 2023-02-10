import React from 'react'

import './AwardItem.css'

const AwardItem = ({data}) => {
  return (
    <div className='app__awarditem'>
        <div className='app__awarditem-img'>
            <img src={data.imgUrl} alt="award" />
        </div>
        <div className='app__awarditem-content'>
            <h5 className='p__cormorant' style={{color:"#DCCA87"}}>{data.title}</h5>
            <p className='p__opensans' style={{color:"#AAAAAA"}}>{data.subtitle}</p>
        </div>
    </div>
  )
}

export default AwardItem