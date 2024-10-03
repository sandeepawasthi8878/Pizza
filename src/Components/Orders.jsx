import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ setIsAuthenticated }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = localStorage.getItem('orderDetails');
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('orderDetails');
    setOrderDetails(null); 
    navigate('/signup');
  };
  const handleExploreMore = () => {
    navigate('/'); 
  };
  return (
    <div className="min-h-screen bg-zinc-600 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-300 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-zinc-900">Order Details</h2>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>

          {orderDetails ? (
            <>
              <h3 className="text-2xl font-semibold">Address: {orderDetails.address}</h3>
              <h3 className="text-2xl font-semibold">Phone Number: {orderDetails.phoneNumber}</h3>

              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-4">Items Ordered:</h4>
                <ul>
                  {orderDetails.cart.map((item, index) => (
                    <li key={index} className="mb-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="mb-4 sm:mb-0">
                          <h3 className="text-lg font-semibold text-zinc-800">{item.name}</h3>
                          <p className="text-zinc-600">Price: ₹{item.price ? Math.floor(item.price) : 0}</p>
                        </div>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-16 w-16 object-cover rounded-lg"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center mt-6 text-lg font-bold">
                <span>Total Price:</span>
                <span>₹{orderDetails.totalPrice}</span>
              </div>

              <button
                onClick={handleExploreMore}
                className="mt-4 block w-full sm:w-[20%] text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-lg font-semibold"
              >
                Explore More
              </button>
            </>
          ) : (
            <p className="text-zinc-600 text-xl">No order details found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
