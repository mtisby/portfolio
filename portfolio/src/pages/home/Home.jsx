import { React, useState } from 'react';

import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';
import AboutMe from '../about_me/Aboutme';
import Projects from '../projects/Projects';

import "./home.css"

function Home() {
  const [mode, setMode] = useState('dark-mode')

  return (
  
    <div className='homePg' id='home'>
      <Navbar />
      <Sidebar className="sidebar" />
      <div className='content'>
        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564393/portfolio/updated%20logos/dark%20mode/MKT_k7cg04.png" className='intro-logo' alt="logo" />
      </div>
      <div className='aboutme-content' id='aboutme'>
        <AboutMe />
      </div>
      <div className='projects-content' id='projects'>
        <Projects />
      </div>
    </div>

  )
}

export default Home;