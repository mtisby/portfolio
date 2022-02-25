import { React, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { lightMode, darkMode } from '../mode/mode';

import "./sidebar.css"


const Sidebar = () => {
  const [mode, setMode] = useState('dark-mode')

  const SetMode = () => {
    mode === 'dark-mode' ? setMode('light-mode') : setMode('dark-mode');
    console.log("mode", mode)
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='home' smooth={true}><img src={ mode === 'dark-mode' ? darkMode['mt-logo'] : lightMode['mt-logo'] } alt="Mariel's Portfolio Logo" /></Link>
      </div>
      <div className='bottom'>
        <img onClick={SetMode} src={ mode === 'dark-mode' ? darkMode['changeto'] : lightMode['changeto'] } className='light-mode-button logo' id='mt-logo' />
        <a target="_blank" href="https://github.com/mtisby"><img src={ mode === 'dark-mode' ? darkMode['github'] : lightMode['github'] } alt="Github" className='logo' id='github' /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mtisby/"><img src={ mode === 'dark-mode' ? darkMode['linkedin'] : lightMode['linkedin'] } alt="Linkedin" className='logo' id='linkedin' /></a>
        <a target="_blank" href="mailto: marieltisby1998@gmail.com"><img src={ mode === 'dark-mode' ? darkMode['email'] : lightMode['email'] } alt="Email" className='logo' id='email' /></a>
        <img src={ mode === 'dark-mode' ? darkMode['line-img'] : lightMode['line-img'] } alt="line" className='line-asset' id='line-img'/>
      </div>
    </div>
  )
}

export default Sidebar