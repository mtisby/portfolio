import React from 'react'

import "./projects.css"

function Projects() {
  const projectGifs = {
    "cheflavor": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645748953/portfolio/cheflavor_lpoir4.png",
    "cheflavor-staffportal": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645748628/portfolio/cheflavor-staffportal_lon02y.png",
    "poodle-doodle": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645745521/portfolio/poodle_doodle_hsuj6f.png",
    "sheNetworks": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645748410/portfolio/sheNetworks_cekap1.png",
    "cinema-save": "https://res.cloudinary.com/dr0ofxgkz/image/upload/v1646087274/portfolio/Screen_Shot_2022-02-28_at_2.27.34_PM_efxk0u.png"
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
            <p className='currentProj'>Current Working Project</p>
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645737116/portfolio/cinema-save_agg2ay.png" id="cinema-save"/>
            <div className="buttonDiv">
                <a target="_blank" href="https://mtisby.github.io/cinema-save-client/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/cinema-save-client"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>
        <div className="projectDiv cheflavor">
            {/* <h1 className="projectHeader">Cheflavor</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742752/portfolio/Portfolio_rrh6em.png" alt="cheflavor website gif" id="cheflavor"/> 
            <div className="buttonDiv">
                <a target="_blank" href="https://protected-scrubland-89262.herokuapp.com/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>
        <div className="projectDiv cheflavor-staff">
            {/* <h1 className="projectHeader">Cheflavor Staff Portal</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742752/portfolio/cheflavor-staffportal_mcskfu.png" id="cheflavor-staffportal"/>
            <div className="buttonDiv">
                <a target="_blank" href="https://protected-scrubland-89262.herokuapp.com/cheflavor/stafflogin/login"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>

        <div className="projectDiv grid-col-span-2 poodle-doodle">
            {/* <h1 className="projectHeader">Poodle Doodle</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742752/portfolio/poodle-doodle_m9fv1l.png" alt="poodle doodle website gif" id="poodle-doodle"/>
            <div className="buttonDiv">
                <a target="_blank" href="https://pacific-bastion-50258.herokuapp.com/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/paint-app"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>

        <div className="projectDiv grid-col-span-2 sheNetworks">
            {/* <h1 className="projectHeader">sheNetworks</h1> */}
            <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645742963/portfolio/sheNetworks_qnvk1z.png" id="sheNetworks"/> 
            <div className="buttonDiv">
                <a target="_blank" href="https://quiet-anchorage-71064.herokuapp.com/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645730403/portfolio/updated%20logos/dark%20mode/internet_gippym.png" alt="website logo" /></a>
                <a target="_blank" href="https://github.com/mtisby/she-hacks"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645564388/portfolio/updated%20logos/dark%20mode/github_adzghe.png" alt="github repo logo" /></a>
            </div>
        </div>

      </div>
    </div>

  )
}

export default Projects;