import './portfolio.css'

const Portfolio = () => {
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
        <div className='portfolio'>
            <h1 className="portfolioHeaderh1"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637970943/portfolio/Untitled_25_pwhhaj.png" alt="" /></h1>
            <div className="projects">
            <div className="projectDiv">
                    <h1 className="projectHeader">Poodle Doodle</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637557563/paint-app/poodle-doodle_gkby0l.png" alt="poodle doodle website gif" id="poodle-doodle"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://pacific-bastion-50258.herokuapp.com/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="website" /></a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/paint-app"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github-logo" /></a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Cheflavor</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656191/portfolio/cheflavor_dzfi1a.png" alt="cheflavor website gif" id="cheflavor"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://protected-scrubland-89262.herokuapp.com/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="website" /></a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github-logo" /></a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Staff Portal</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636855473/portfolio/staff-portal_owyzce.png" alt="cheflavor-website-gif" id="cheflavor-staffportal"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://protected-scrubland-89262.herokuapp.com/cheflavor/stafflogin/login"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="website" /></a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/cheflavor"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github-logo" /></a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Star Campsites</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636656190/portfolio/star-campsites_veouus.png" alt="star campsites website gif" id="star-campsites"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://secure-gorge-90469.herokuapp.com/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="website" /></a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/star-campsites"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github-logo" /></a></button>
                    </div>
                </div>
            </div>


            <h3 className="portfolioHeaderh3">Mini Projects</h3>
            <div className="projects">
                <div className="projectDiv">
                    <h1 className="projectHeader">Events Calendar</h1>
                    <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636658235/portfolio/js-calendar_brr61d.png" alt="cheflavor website gif" id="js-calendar"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://mtisby.github.io/javascript-calendar/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="website" /></a></button>
                        <button className="projectButtons"><a href="https://github.com/mtisby/javascript-calendar"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github-logo" /></a></button>
                    </div>
                </div>
                <div className="projectDiv">
                    <h1 className="projectHeader">Signum</h1>
                <img onMouseEnter={handleHoverEnter} onMouseLeave={ handleHoverLeave } src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636659030/portfolio/signum_yh3yez.png" alt="star campsites website gif" id="signum"/>
                    <div className="buttonDiv">
                        <button className="projectButtons"><a href="https://ismatullaevash.github.io/signum/#/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="website" /></a></button>
                        <button className="projectButtons"><a href="https://github.com/ismatullaevash/signum"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github-logo" /></a></button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio
