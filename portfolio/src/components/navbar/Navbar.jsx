import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        
      </div>
      <div className='right'>
        <Link to='aboutme'>
          <p>About Me</p>
        </Link>
        <Link to='projects'>
          <p>Projects</p>
        </Link>
        <a target="_blank" href="https://docs.google.com/document/d/1BVQTIlIHhvjXhMXVxH7-L1vTFLRkhV4bye12D-nbcGc/edit?usp=sharing" download="mtisby-resume">
          <p>Resume <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645657819/portfolio/updated%20logos/dark%20mode/download_j00mnq.png" alt="download image" /></p>
        </a>
      </div>
    </div>
  )
}

export default Navbar