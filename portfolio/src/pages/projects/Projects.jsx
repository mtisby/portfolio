import React from 'react'

import "./projects.css"

function Projects() {
  const projectGifs = {
    "star-campsites": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636654003/portfolio/Star_Campsites_uliupa.gif",
    "cheflavor": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636655757/portfolio/cheflavor_banyqt.gif",
    "js-calendar": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636658371/portfolio/js-calenfdar_auidpm.gif",
    "signum": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636659040/portfolio/signum_oslci3.gif",
    "cheflavor-staffportal": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636855482/portfolio/cheflavor-staffportal_ijllwa.gif",
    "poodle-doodle": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637555977/paint-app/Poodle_Doodle_-_Google_Chrome_2021-11-21_20-21-49_SparkVideo_1_x0u3jj.gif"
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
      <div className='projects-grid'>
        <div className="projectDiv grid-col-span-2 cinema-save">
            <h1 className="projectHeader">Cinema Save</h1>
            {/* <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645727101/portfolio/cinema_save_placeholder_ghrroi.png" id="cinema save"/> */}
            {/* <div className="buttonDiv">
                <a href="https://mtisby.github.io/cinema-save-client/">website</a>
                <a href="https://github.com/mtisby/cinema-save-client">repository</a>
            </div> */}
        </div>
        <div className="projectDiv cheflavor">
            <h1 className="projectHeader">Cheflavor</h1>
            {/* <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656191/portfolio/cheflavor_dzfi1a.png" alt="cheflavor website gif" id="cheflavor"/> */}
            {/* <div className="buttonDiv">
                <a href="https://protected-scrubland-89262.herokuapp.com/cheflavor">website</a>
                <a href="https://github.com/mtisby/cheflavor">repository</a>
            </div> */}
        </div>
        <div className="projectDiv cheflavor-staff">
            <h1 className="projectHeader">Cheflavor Staff Portal</h1>
            <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636855473/portfolio/staff-portal_owyzce.png" alt="cheflavor-website-gif" id="cheflavor-staffportal"/>
            {/* <div className="buttonDiv">
                <a href="https://protected-scrubland-89262.herokuapp.com/cheflavor/stafflogin/login">website</a>
                <a href="https://github.com/mtisby/cheflavor">repository</a>
            </div> */}
        </div>

        <div className="projectDiv grid-col-span-2 sheNetworks">
            <h1 className="projectHeader">sheNetworks</h1>
            {/* <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645727105/portfolio/sheNetworks_z0gemm.png" id="sheNetworks"/> */}
            {/* <div className="buttonDiv">
                <a href="https://quiet-anchorage-71064.herokuapp.com/">website</a>
                <a href="https://github.com/mtisby/she-hacks">repository</a>
            </div> */}
        </div>

        <div className="projectDiv grid-col-span-2 poodle-doodle">
            <h1 className="projectHeader">Poodle Doodle</h1>
            {/* <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637557563/paint-app/poodle-doodle_gkby0l.png" alt="poodle doodle website gif" id="poodle-doodle"/> */}
            {/* <div className="buttonDiv">
                <a href="https://pacific-bastion-50258.herokuapp.com/">website</a>
                <a href="https://github.com/mtisby/paint-app">repository</a>
            </div> */}
        </div>
      </div>
    </div>

  )
}

export default Projects;