import React from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import './App.css'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content - Product List */}
      <ProductList />
    </div>
  );
};

export default App;
