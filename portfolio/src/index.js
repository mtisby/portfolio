import { render } from "react-dom";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Splash from "./pages/Splash";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import { ThemeProvider } from "./components/mode/ThemeContext"; 

const rootElement = document.getElementById("root");
render(
    <ThemeProvider>
      <BrowserRouter
      basename="/portfolio">
          <Routes>
            <Route path="/" element={<Splash />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>,
  rootElement
);
