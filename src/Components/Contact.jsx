import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-zinc-500 py-10 min-h-screen flex items-center justify-center">
      <div className="bg-zinc-700 w-50 h-auto shadow-lg rounded-lg flex flex-col items-center justify-center p-6">
        <div className="h-60 w-60 mb-4">
          <img
            src="https://media.istockphoto.com/id/1205283639/photo/mother-and-daughter-eating-pizza-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=jtsn7Q1Z3RfVHB4WFW39Q_2xEGKKBPvj7iJEi5fU0_U=" // Replace with your image URL
            alt="Contact"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-400">Contact Us</h2>
        <p className="text-gray-200 font-medium mb-2 text-center">
          We're here to help! If you have any questions or need assistance, please reach out to us.
        </p>
        <p className="text-gray-200 font-medium mb-4 text-center">
          You can always contact us at:
        </p>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="text-green-600 mr-2" />
            <span className="text-white font-semibold">+123 456 7890</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-blue-600 mr-2" />
            <span className="text-white font-semibold">info@example.com</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-600 mr-2" />
            <span className="text-white font-semibold">123 Main St, City</span>
          </div>
        </div>
        <p className="text-white font-medium mt-4 text-center">
          <span className="font-bold">Any questions? </span>
          Give us a call or send us an email!
        </p>
        <p className="text-white font-medium text-center mt-2">
          Or click the links below to connect with us!
        </p>
        <button
          className="mt-4 bg-blue-500 text-white font-bold py-1 px-3 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => window.location.href='mailto:info@example.com'} // Email link
        >
          Email Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
