import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

//Remote components
// const Header = React.lazy(() => import('homepage/Header'));
import Header from "homepage/Header";
import Footer from "homepage/Footer";

// import SafeImport from "./SafeImport";
import ProductView from "./ProductView/ProductView";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
