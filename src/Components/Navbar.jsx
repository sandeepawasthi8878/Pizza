import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdContactMail } from "react-icons/md";


const MyNavbar = () => {
  return (
    <nav className="bg-yellow-600 p-3 ">
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="flex items-center">
          <img src="/images/download.png" alt="logo" className="h-12 w-[11vw]" />
        </div>
        <div className="flex space-x-6">
        
          <Link to="/signup" className="text-white my-button-link flex items-center text-black hover:text-gray-700 font-semibold">
            <FaUserAlt className="mr-2" />SignUp
          </Link>
          <Link to="/contact" className="text-white my-button-link flex items-center text-black hover:text-gray-700 font-semibold"><MdContactMail className="mr-2" />Contact</Link>

        
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
