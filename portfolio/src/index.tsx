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


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

