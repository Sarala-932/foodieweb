import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Menu from "./pages/Menu";
import BookTable from "./pages/BookTable";
import Blog2 from "./pages/Blog2";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/blogs/article" element={<Blog2 />} />
      </Routes>
    </div>
  );
}
