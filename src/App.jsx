import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Shop from "./pages/Shop"; // Import Shop Page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <ProductGrid /> {/* Keep this outside if it should always appear */}
    </Router>
  );
}

export default App;
