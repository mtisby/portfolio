import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar';

import "./home.css"

function Home() {
  return (
    <div className='homePg'>
      <Navbar />
      <Sidebar className="sidebar" />
      <div className='content'>
        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564393/portfolio/updated%20logos/dark%20mode/MKT_k7cg04.png" className='intro-logo' alt="logo" />
      </div>
    </div>
  )
}

export default Home;