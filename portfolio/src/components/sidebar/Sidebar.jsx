import { React, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { modes } from '../mode/mode';

import "./sidebar.css"


const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='home' smooth={true}><img src={modes['dark-mode']['mt-logo']} alt="Mariel's Portfolio Logo" /></Link>
      </div>
      <div className='bottom'>
        <a target="_blank" href="https://github.com/mtisby"><img src={ modes['dark-mode']['github'] } alt="Github" className='logo' id='github' /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mtisby/"><img src={ modes['dark-mode']['linkedin'] } alt="Linkedin" className='logo' id='linkedin' /></a>
        <a target="_blank" href="https://devpost.com/mt1357?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><img src={ modes['dark-mode']['devpost'] } alt="Devpost" className='logo' id='devpost' /></a>
        <a target="_blank" href="mailto: marieltisby1998@gmail.com"><img src={ modes['dark-mode']['email'] } alt="Email" className='logo' id='email' /></a>
        <img src={ modes['dark-mode']['line-img'] } alt="line" className='line-asset' id='line-img'/>
      </div>
    </div>
  )
}

export default Sidebar