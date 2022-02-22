import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>
        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645502845/portfolio/MKT_b10dn1.png" alt="Mariel's Portfolio Logo" />
      </div>
      <div className='right'>
        <p>About Me</p>
        <p>Projects</p>
        <p>Resume</p>
      </div>
    </div>
  )
}

export default Navbar