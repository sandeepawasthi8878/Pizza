import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaPizzaSlice } from 'react-icons/fa';

const Details = ({ pizzas, addToCart }) => {
  const { id } = useParams();

  const selectedPizza = pizzas.find((pizza) => pizza.id === parseInt(id));

  const handleAddToCart = () => {
    if (selectedPizza) {
      addToCart(selectedPizza); 
      alert(`${selectedPizza.name} has been added to the cart!`);
    }
  };

  return (
    <div className="bg-zinc-500 py-10 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
        {selectedPizza ? (
          <div className="bg-white w-full md:w-4/5 lg:w-3/5 mx-auto shadow-lg rounded-lg p-6 md:p-8 mb-10"> {/* Adjusted padding */}
            <div className="h-80 w-full">
              <img
                src={selectedPizza.imageUrl}
                alt={selectedPizza.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <h2 className="text-3xl font-bold mt-6">{selectedPizza.name}</h2>
            <p className="text-gray-600 mt-4">{selectedPizza.description}</p>
            <p className="text-lg font-bold text-yellow-600 mt-4">Price: {selectedPizza.price}</p>
            <div className="flex items-center mt-4">
              <FaStar className="text-yellow-500 mr-2" />
              <span className="text-gray-600">Rating: {selectedPizza.rating}</span>
            </div>
            <ul className="text-sm text-gray-500 mt-4">
              {selectedPizza.ingredients.map((ingredient, index) => (
                <li key={index} className="inline-block mr-2">
                  <FaPizzaSlice className="text-red-500 inline-block mr-1" />
                  {ingredient}
                </li>
              ))}
            </ul>
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <h2 className="text-white">Pizza Not Found</h2>
        )}
      </div>
    </div>
  );
};

export default Details;
