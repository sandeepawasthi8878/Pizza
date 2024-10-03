import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalOffer } from 'react-icons/md';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { FaPizzaSlice } from "react-icons/fa6";
import { FaTrashRestoreAlt } from "react-icons/fa";

const Topbar = ({ isAuthenticated }) => {
  if (!isAuthenticated) return null;

  return (
    <div className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center flex-wrap">
        <div className="flex items-center mb-2 sm:mb-0">
          <MdLocalOffer className="text-yellow-400 mr-2" />
          <h6 className="text-sm sm:text-xl">Free Home Delivery On Order Above 500/- Rupees</h6>
        </div>
        <div className="flex space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <Link to="/" className="text-white my-button-link flex items-center hover:text-yellow-400 font-semibold">
            <FaHome className="mr-2" />Home
          </Link>
          <Link to="/pizza/:id" className="text-white my-button-link flex items-center hover:text-yellow-400 font-semibold">
            <FaPizzaSlice className="mr-2" />Pizza
          </Link>
          <Link to="/cart" className="text-white my-button-link flex items-center hover:text-yellow-400 font-semibold">
            <FaShoppingCart className="mr-2" />Cart
          </Link>
          {/* <Link to="/order" className="text-white my-button-link flex items-center hover:text-yellow-400 font-semibold">
            <FaTrashRestoreAlt className="mr-2" />My Order
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
