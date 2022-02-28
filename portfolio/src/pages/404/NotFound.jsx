import { Link } from "react-router-dom";
import "./notfound.css"

function NotFound() {
  return (
      <div className="NotFound">
        <div className="bgimg">
          <h3>Sorry the page you were looking for doesn't exist.</h3>
          <h4>return to the homepage <Link to='/home'>here</Link></h4>
        </div>
      </div>

  );
}

export default NotFound;
