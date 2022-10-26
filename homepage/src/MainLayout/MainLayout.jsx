import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import SafeImport from "./SafeImport";
import ProductView from "gallery/ProductView";
import Homepage from '../Homepage';

import Header from '../Header';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;