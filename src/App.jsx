import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Menu from "./pages/Menu";
import BookTable from "./pages/BookTable";
import Blog2 from "./pages/Blog2";
import About from './pages/About';
import Contact from "./pages/Contact";
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <div key={location.pathname}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/article" element={<Blog2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book-table" element={<BookTable />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
    </div>
  );
}
