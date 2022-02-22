import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564357/portfolio/updated%20logos/dark%20mode/sun_diwa0x.png" alt="light-mode" className='logo' />
      <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="Github" className='logo' />
      <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564407/portfolio/updated%20logos/dark%20mode/linkeding_zbqaz5.png" alt="Linkedin" className='logo' />
      <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564391/portfolio/updated%20logos/dark%20mode/email_sn5stt.png" alt="Email" className='logo' />
      <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645566077/portfolio/updated%20logos/dark%20mode/Line_1_wtdycn.png" alt="line" className='line-asset' />
    </div>
  )
}

export default Sidebar