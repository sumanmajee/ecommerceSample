import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">Price: ₹{product.price}</p>
      <p className="text-gray-600">Rating: {product.rating}★</p>
      <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded-md hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
