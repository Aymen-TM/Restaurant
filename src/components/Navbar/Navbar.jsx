import React, { useState } from 'react';

import './Navbar.css';

import { images } from '../../constants';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)

  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">home</a></li>
      <li className='p__opensans'><a href="#about">about</a></li>
      <li className='p__opensans'><a href="#menu">menu</a></li>
      <li className='p__opensans'><a href="#laurels">awards</a></li>
      <li className='p__opensans'><a href="#findus">contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log In / Register</a>
      <div />
      <a href="#booking" className='p__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setToggle(true)}} />
      {toggle &&
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu className="overlay__close" onClick={()=>{setToggle(false)}} />
        <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'><a href="#home">home</a></li>
          <li className='p__opensans'><a href="#about">about</a></li>
          <li className='p__opensans'><a href="#menu">menu</a></li>
          <li className='p__opensans'><a href="#awards">awards</a></li>
          <li className='p__opensans'><a href="#contact">contact</a></li>
        </ul>
      </div>
      }
    </div>
  </nav>
)};

export default Navbar;
