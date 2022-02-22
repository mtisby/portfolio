import { render } from "react-dom";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import App from "./pages/Splash";
import Home from "./pages/Home";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter
    basename="/portfolio">
        <Routes>
          <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>,
  rootElement
);

/* <HashRouter basename="/calendar"/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/resume" element={<ResumePg />} />
    </Routes>,
  rootElement */