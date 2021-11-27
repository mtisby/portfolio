import Navbar from "../components/navbar/Navbar";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Source from "../components/source/Source";
import MyStack from "../components/mystack/MyStack";
import "../app.css"

function App() {
  return (
    
      <div className="App">
        <Navbar />
      <div className="sections">
        <Intro />
        <MyStack />
        <Portfolio />
        <Source />
        </div>
      </div>

  );
}

export default App;
