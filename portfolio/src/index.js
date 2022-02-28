import { render } from "react-dom";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Splash from "./pages/Splash";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter
    basename="/portfolio">
        <Routes>
          <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
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