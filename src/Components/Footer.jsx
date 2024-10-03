import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-zinc-300 py-8 px-5">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 text-2xl"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 text-2xl"
          >
            <FaTwitter />
          </a>
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-yellow-400 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="text-lg mb-4">
          Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery.
          Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. *T&C Apply.
          Hurry up and place your order now!
        </p>

        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Pizza Hut India. All rights reserved. License Number: 10017011004220
        </p>
        
        <p className="text-sm">Follow us on social media:</p>
      </div>
    </footer>
  );
};

export default Footer;
