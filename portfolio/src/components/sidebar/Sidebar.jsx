import { React, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { darkModeAssests, lightModeAssests } from '../mode/mode';
import { useTheme } from '../mode/ThemeContext';

import "./sidebar.css"


const Sidebar = () => {
  const [mode, setMode] = useState('dark-mode')
  const { theme, setCurrentTheme } = useTheme();

  const SetMode = () => {
    mode === 'dark-mode' ? setCurrentTheme('light-mode') : setCurrentTheme('dark-mode');
    console.log(theme)
    localStorage.setItem('mode', mode.toString())
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='home' smooth={true}><img src={theme['mt-logo']} alt="Mariel's Portfolio Logo" /></Link>
      </div>
      <div className='bottom'>
        <img onClick={SetMode} src={ theme['changeto'] } className='light-mode-button logo' id='mt-logo' />
        <a target="_blank" href="https://github.com/mtisby"><img src={ theme['github'] } alt="Github" className='logo' id='github' /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mtisby/"><img src={ theme['linkedin'] } alt="Linkedin" className='logo' id='linkedin' /></a>
        <a target="_blank" href="https://devpost.com/mt1357?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><img src={ theme['devpost'] } alt="Devpost" className='logo' id='devpost' /></a>
        <a target="_blank" href="mailto: marieltisby1998@gmail.com"><img src={ theme['email'] } alt="Email" className='logo' id='email' /></a>
        <img src={ theme['line-img'] } alt="line" className='line-asset' id='line-img'/>
      </div>
    </div>
  )
}

export default Sidebar