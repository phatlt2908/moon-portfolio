import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullLayout from "./views/components/full-layout/full-layout.component";
import Home from "./views/pages/home/home.component";
import Portfolio from "./views/pages/portfolio/portfolio.component";
import About from "./views/pages/about/about.component";
import NotFound from "./views/pages/not-found/not-found.component";
import "./assets/scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
