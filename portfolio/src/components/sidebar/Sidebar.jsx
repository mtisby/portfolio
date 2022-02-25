import { React, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { darkModeAssests, lightModeAssests } from '../mode/mode';

import "./sidebar.css"


const Sidebar = () => {
  const [mode, setMode] = useState('dark-mode')

  const SetMode = () => {
    mode === 'dark-mode' ? setMode('light-mode') : setMode('dark-mode');
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='home' smooth={true}><img src='https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645738916/portfolio/updated%20logos/dark%20mode/logo-transparent_ibdxpw.png' alt="Mariel's Portfolio Logo" /></Link>
      </div>
      <div className='bottom'>
        {/* <img onClick={SetMode} src={ mode === 'dark-mode' ? darkModeAssests['changeto'] : lightModeAssests['changeto'] } className='light-mode-button logo' id='mt-logo' /> */}
        <a target="_blank" href="https://github.com/mtisby"><img src={ mode === 'dark-mode' ? darkModeAssests['github'] : lightModeAssests['github'] } alt="Github" className='logo' id='github' /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mtisby/"><img src={ mode === 'dark-mode' ? darkModeAssests['linkedin'] : lightModeAssests['linkedin'] } alt="Linkedin" className='logo' id='linkedin' /></a>
        <a target="_blank" href="mailto: marieltisby1998@gmail.com"><img src={ mode === 'dark-mode' ? darkModeAssests['email'] : lightModeAssests['email'] } alt="Email" className='logo' id='email' /></a>
        <img src={ mode === 'dark-mode' ? darkModeAssests['line-img'] : lightModeAssests['line-img'] } alt="line" className='line-asset' id='line-img'/>
      </div>
    </div>
  )
}

export default Sidebar