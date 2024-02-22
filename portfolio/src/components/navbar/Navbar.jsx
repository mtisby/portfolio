import { React, useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { modes } from "../mode/mode"

import "./navbar.css"

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='left'>
        
      </div>
      <div className='right'>
        <Link to='aboutme' smooth={true}>
          <p>About Me</p>
        </Link>
        <Link to='projects' smooth={true}>
          <p>Projects</p>
        </Link>
        <a target="_blank" href="https://docs.google.com/document/d/1BVQTIlIHhvjXhMXVxH7-L1vTFLRkhV4bye12D-nbcGc/edit?usp=sharing" download="mtisby-resume">
          <p>Resume <img src={ modes['dark-mode']['download'] } alt="download image" /></p>
        </a>
      </div>
    </div>
  )
}

export default Navbar