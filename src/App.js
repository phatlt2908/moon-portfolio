import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullLayout from "./views/components/full-layout/full-layout.component";
import Home from "./views/pages/home/home.component";
import Portfolio from "./views/pages/portfolio/portfolio.component";
import About from "./views/pages/about/about.component";
import NotFound from "./views/pages/not-found/not-found.component";
import ScrollToTop from "./views/components/scroll-to-top.component"
import "./assets/scss/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
