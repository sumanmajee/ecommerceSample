import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">DIGISHOP</div>

        {/* Navigation items */}
        <ul className="flex space-x-4 text-white">
          <li className="hover:text-gray-200 cursor-pointer">HOME</li>
          <li className="hover:text-gray-200 cursor-pointer">PRODUCTS</li>
          <li className="hover:text-gray-200 cursor-pointer">CONTACT</li>
        </ul>

        {/* Log In and Sign Up */}
        <div className="flex space-x-4">
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-600">
            LOG IN
          </button>
          <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-600">
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
