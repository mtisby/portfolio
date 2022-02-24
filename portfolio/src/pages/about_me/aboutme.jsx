import React from 'react'

import "./aboutme.css"

function AboutMe() {
  return (
    <div className='aboutme'>
       <div class="mariel">
          <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636672805/portfolio/picture_zb5vbf.jpg" alt="mariel" class="marielProfilePic" />
          <p> Hi my name is Mar! I'm a full stack developer who loves to create experiences. I currently work at Mercury Intermedia but I am always working on my own personal projects.</p>
          <div class="contactus">
              <a href="https://github.com/mtisby"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github"  /></a>
              <a target="_blank" href="mailto: marieltisby1998@gmail.com"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564391/portfolio/updated%20logos/dark%20mode/email_sn5stt.png" alt="Email" className='logo' /></a>
              <a href="https://www.linkedin.com/in/mtisby/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564407/portfolio/updated%20logos/dark%20mode/linkeding_zbqaz5.png" alt="linkedin" /></a>
          </div>
        </div>
    </div>
  )
}

export default AboutMe;