import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./data";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("price");

  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Handle category filtering
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle sorting
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  // Filtered products based on category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  // Sorting logic
  const sortedAndFilteredProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price") {
      return a.price - b.price;
    } else if (sort === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      {/* Filter and Sort Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Products</h2>

        <div className="flex space-x-6">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-medium">Category:</label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <label className="text-gray-700 font-medium">Sort By:</label>
            <select
              value={sort}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="price">Price - Low to High</option>
              <option value="rating">Rating - High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex flex-wrap -mx-4">
        {sortedAndFilteredProducts.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
