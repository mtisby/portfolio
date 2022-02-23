import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645502845/portfolio/MKT_b10dn1.png" alt="Mariel's Portfolio Logo" />
      </div>
      <div className='bottom'>
        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564357/portfolio/updated%20logos/dark%20mode/sun_diwa0x.png" alt="light-mode" className='logo' />
        <a target="_blank" href="https://github.com/mtisby"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="Github" className='logo' /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mtisby/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564407/portfolio/updated%20logos/dark%20mode/linkeding_zbqaz5.png" alt="Linkedin" className='logo' /></a>
        <a target="_blank" href="mailto: marieltisby1998@gmail.com"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564391/portfolio/updated%20logos/dark%20mode/email_sn5stt.png" alt="Email" className='logo' /></a>
        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645566077/portfolio/updated%20logos/dark%20mode/Line_1_wtdycn.png" alt="line" className='line-asset' />
      </div>
    </div>
  )
}

export default Sidebar