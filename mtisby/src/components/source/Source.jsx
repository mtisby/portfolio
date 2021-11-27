import "./source.css"

const Source = () => {
    return (
        <div className="sourceAndAbout">
            <div class="aboutUs">
                <div class="people">
                    <div class="mariel">
                        <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1636672805/portfolio/picture_zb5vbf.jpg" alt="mariel" class="marielProfilePic"></img>
                        <p> Mariel is a cognitive scientist turned full stack developer. After five years of research, she realized her passion wasn't for research but for developing easily accessible tools.</p>
                        <div class="contactus">
                            <a href="https://www.linkedin.com/in/mtisby/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450369/paint-app/logos/LinkedIn_g8dely.png" alt="linkedin"></img></a>
                            <a href="https://mtisby.github.io/mtisby-website/"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/Website_pt9szx.png" alt="portfolio"></img></a>
                            <a href="https://github.com/mtisby"><img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1637450368/paint-app/logos/GitHub_qb49mi.png" alt="github"></img></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="source">
                <h2>This website was built in React</h2>
                <h3>check out the source code <a href="https://github.com/mtisby/mtisby.github.io/tree/master/mtisby-website">here</a></h3>
            </div>
        </div>
    )
}

export default Source
