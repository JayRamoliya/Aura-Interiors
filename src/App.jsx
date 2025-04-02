import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./pages/Shop"; // Import Shop Page
import Footer from "./components/Footer";
import CategoryShop from "./pages/CategoryShop";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<CategoryShop />} /> {/* Category-wise Shop Route */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
