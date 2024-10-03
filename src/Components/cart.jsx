
import React, { useState } from 'react';
import { FaShoppingCart, FaTag } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 

const Cart = ({ cart, setCart }) => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); 

  const totalPrice = cart.reduce((total, item) => {
    const price = typeof item.price === 'number' && !isNaN(item.price) ? item.price : 0;
    return total + Math.floor(price);
  }, 0);

  const discount = 0.10;
  const discountedPrice = Math.floor(totalPrice - totalPrice * discount);

  const handleOrder = () => {
    if (!address || !phoneNumber) {
      alert("Please fill in both address and phone number.");
      return;
    }

    const orderDetails = {
      cart,
      address,
      phoneNumber,
      totalPrice: discountedPrice,
    };
    
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    setCart([]);
    
    alert("Order placed successfully!");

    navigate('/order');
  };

 

  return (
    <div className="min-h-screen bg-zinc-600 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-300 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center">
            <FaShoppingCart className="mr-2" /> Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-zinc-600 text-xl">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>
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
          )}

          {cart.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-6 text-lg font-semibold">
                <span>Total Price:</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between items-center mt-4 text-lg font-semibold text-green-600">
                <FaTag className="mr-2" /> <span>Discount (10%):</span>
                <span>-₹{Math.floor(totalPrice * discount)}</span>
              </div>

              <div className="flex justify-between items-center mt-4 text-lg font-bold">
                <span>Discounted Total:</span>
                <span>₹{discountedPrice}</span>
              </div>

              <div className="mt-6">
                <label className="block text-zinc-900 mb-2">Address:</label>
                <input 
                  type="text" 
                  className="w-full sm:w-[50%] p-2 border rounded-lg" 
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} 
                />
              </div>

              <div className="mt-4">
                <label className="block text-zinc-900 mb-2">Phone Number:</label>
                <input 
                  type="tel" 
                  className="w-full sm:w-[50%] p-2 border rounded-lg" 
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                />
              </div>

              <button
                onClick={handleOrder}
                className="mt-6 block w-full sm:w-[20%] text-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg shadow-lg font-semibold"
              >
                Place Order
              </button>

             
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
