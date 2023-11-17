import React from 'react'

import "./projects.css"

function Projects() {
  const projectGifs = {
    "cheflavor": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645748953/portfolio/cheflavor_lpoir4.png",
    "cheflavor-staffportal": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645748628/portfolio/cheflavor-staffportal_lon02y.png",
    "poodle-doodle": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645745521/portfolio/poodle_doodle_hsuj6f.png",
    "sheNetworks": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645748410/portfolio/sheNetworks_cekap1.png",
    "bally-sports": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1700094786/portfolio/Screen_Shot_2023-11-15_at_4.30.11_PM_wfnhez.png"
  }

  const handleHoverEnter = (e) => {
      const newSrc = projectGifs[e.target.id];
      if (newSrc !== '' || newSrc !== undefined) {
          projectGifs[e.target.id] = e.target.src;
          e.target.src = newSrc;
      }
  }

  const handleHoverLeave = (e) => {
      const newSrc = projectGifs[e.target.id];
      if (newSrc !== '' || newSrc !== undefined) {
          projectGifs[e.target.id] = e.target.src;
          e.target.src = newSrc;
      }
  }

  return (
    <div className='projects'>
        <h1 className='header'>Projects</h1>
        {/* <div className="professional-projects-grid">
            <div className='projectDiv'>
                <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1700094929/portfolio/Bally_Sports_app_logo_lbwfcr.png" alt="bally sports website" id="bally-sports"/> 
                <div className='description'>
                    <p>Bally Sports is a premier sports streaming service designed to bring the thrill of live sports directly to your screen. Whether you're a devoted fan or a casual viewer, our platform offers an immersive and personalized experience, showcasing a wide range of sports events from around the world.</p>
                </div>
                <div className="buttonDiv">
                    <a target="_blank" href="https://www.ballysports.com/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                </div>
            </div>
        </div> */}
      <h1 className='header'>Personal Projects</h1>
      <div className='projects-grid'>
        <div className="projectDiv cheflavor">
            {/* <h1 className="projectHeader">Cheflavor</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742752/portfolio/Portfolio_rrh6em.png" alt="cheflavor website gif" id="cheflavor"/> 
            <div className="buttonDiv">
                <a target="_blank" href="https://cheflavor.onrender.com/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>
        <div className="projectDiv cheflavor-staff">
            {/* <h1 className="projectHeader">Cheflavor Staff Portal</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742752/portfolio/cheflavor-staffportal_mcskfu.png" id="cheflavor-staffportal"/>
            <div className="buttonDiv">
                <a target="_blank" href="https://cheflavor.onrender.com/cheflavor/stafflogin/login"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>

        <div className="projectDiv grid-col-span-2 poodle-doodle">
            {/* <h1 className="projectHeader">Poodle Doodle</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742752/portfolio/poodle-doodle_m9fv1l.png" alt="poodle doodle website gif" id="poodle-doodle"/>
            <div className="buttonDiv">
                <a target="_blank" href="https://poodledoodle.onrender.com"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/paint-app"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
                <a target="_blank" href="https://www.linkedin.com/posts/mtisby_from-nov-16-nov-23-i-participated-in-activity-6887906871664095232-qMPj?utm_source=linkedin_share&utm_medium=member_desktop_web"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564407/portfolio/updated%20logos/dark%20mode/linkeding_zbqaz5.png" alt="linkedin logo" /></a>

            </div>
        </div>

        <div className="projectDiv grid-col-span-2 sheNetworks">
            {/* <h1 className="projectHeader">sheNetworks</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742963/portfolio/sheNetworks_qnvk1z.png" id="sheNetworks"/> 
            <div className="buttonDiv">
                <a target="_blank" href="https://shenetworks.onrender.com"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/she-hacks"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
                <a target="_blank" href="https://devpost.com/software/shenetworks"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1646088627/portfolio/updated%20logos/dark%20mode/Portfolio_z8jbxz.png" alt="devpost logo" className='sheNetworks-devpost' /></a>
            </div>
        </div>

      </div>
    </div>

  )
}

export default Projects;