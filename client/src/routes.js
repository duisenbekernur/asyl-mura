import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import MemorialsPage from "./pages/MemorialsPage/index";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage.jsx";
import GrandsPage from "./pages/GrandsPage";
import AdminPage from "./pages/AdminPage/index";
import Memorial from "./pages/MemorialsPage/Memorial/Memorial";
import NotFound from "./pages/NotFound";
import Article from "./pages/Article";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/main" exact element={<MainPage />} />
        <Route path="/memorials" element={<MemorialsPage />} />
        <Route path="/memorials/:cityName/" element={<Memorial />} />
        <Route path="/memorials/:cityName/:id" element={<Article />} />
        <Route path="/grands" exact element={<GrandsPage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {/* <Navigate to="/notfound" element={<NotFound />} /> */}
    </>
  );
};

export default routes;
