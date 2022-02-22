import "../app.css"
import "./splash.css"
import { Navigate } from "react-router-dom";
import { useState } from "react";

function Splash() {
  const [timer, setTimer] = useState(Boolean);

  setTimeout(() => {
    setTimer(true);
  }, 3000)

  if(timer){
    return (
      <Navigate to="/home" replace/>
    );
  }

  return (
      <div className="App">
        <div className='logo'>
          <img src="https://res.cloudinary.com/dr0ofxgkz/image/upload/v1645463129/portfolio/MKT_qopxd2.gif" alt="Mariel's Portfolio Logo" />
        </div>
      </div>

  );
}

export default Splash;
