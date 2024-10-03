import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaPizzaSlice } from 'react-icons/fa';

const Home = () => {
  const pizzas = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic margherita with fresh mozzarella, tomatoes, and basil.',
      price: '₹399',
      rating: 4.5,
      discount: '10% OFF',
      ingredients: ['Tomatoes', 'Mozzarella', 'Basil'],
      "imageUrl": "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=QHrM65XqDQd3Z50r5cT2qV4nwctw6rNMM1JTlGEEVzI="

    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Spicy pepperoni with mozzarella cheese on a thin crust.',
      price: '₹499',
      rating: 4.8,
      discount: '15% OFF',
      ingredients: ['Pepperoni', 'Mozzarella', 'Tomato Sauce'],
      "imageUrl": "https://media.istockphoto.com/id/1303119992/photo/pizza_margerita.jpg?s=612x612&w=0&k=20&c=0HZZMC10ySBYvMVAKUNzknkQ1E74q8NKwTV5_K6WK6M="

    },
    {
      id: 3,
      name: 'BBQ Chicken Pizza',
      description: 'Grilled chicken with BBQ sauce and onions on a crispy base.',
      price: '₹549',
      rating: 4.7,
      discount: '20% OFF',
      ingredients: ['Chicken', 'BBQ Sauce', 'Onions'],
      "imageUrl": "https://media.istockphoto.com/id/153444470/photo/pizza.jpg?s=612x612&w=0&k=20&c=F0VFx6Cful-Vqwvt8lT0Dz-n3yo67wC7-scdfHiwM6k="
    },
    {
      id: 4,
      name: 'Veggie Pizza',
      description: 'Loaded with fresh vegetables and topped with mozzarella.',
      price: '₹399',
      rating: 4.4,
      ingredients: ['Bell Peppers', 'Onions', 'Olives'],
      "imageUrl": "https://media.istockphoto.com/id/1258146053/photo/paneer-pizza.jpg?s=612x612&w=0&k=20&c=RrZWNbKZoSMzu6SNcq9DWB54_OJSSwQQu4UEs6U0Y4g="
    },
    {
      id: 5,
      name: 'Cheese Burst Pizza',
      description: 'Cheesy delight with a gooey, cheesy filling inside the crust.',
      price: '₹599',
      rating: 4.9,
      ingredients: ['Cheese', 'Tomato Sauce', 'Herbs'],
      "imageUrl": "https://media.istockphoto.com/id/1341905666/photo/chinese-food-veg-pizza.jpg?s=612x612&w=0&k=20&c=ZMNxcRhL9uGV8zebXg5wGCh-5GzVBRHsu-lz7Sc06V4="
    },
    {
      "id": 14,
      "name": "Spinach & Feta Pizza",
      "description": "Healthy spinach with feta cheese and olive oil.",
      "price": "₹599",
      "rating": 4.4,
      "ingredients": ["Spinach", "Feta Cheese", "Olive Oil"],
      "imageUrl": "https://media.istockphoto.com/id/949903834/photo/indian-paneer-pizza-with-fresh-cottage-cheese-cubes-and-white-sauce.jpg?s=612x612&w=0&k=20&c=sb7osYrq3j8BItngXupV9isq_jljGxtwnxshUWIyo_Y="
    },
    {
      "id": 15,
      "name": "Chicken Tikka Pizza",
      "description": "Indian-style pizza with spicy chicken tikka on a thin crust.",
      "price": "₹649",
      "rating": 4.9,
      "ingredients": ["Chicken Tikka", "Onions", "Coriander"],
      "imageUrl": "https://media.istockphoto.com/id/181175528/photo/pizza-margarita.jpg?s=612x612&w=0&k=20&c=nkpFbhaHNNAcGSlBQMB1FWc-4eA5V79fZuEsAMUP2pY="
    },
    {
      "id": 16,
      "name": "Alfredo Pizza",
      "description": "Creamy Alfredo sauce with chicken and mushrooms.",
      "price": "₹529",
      "rating": 4.7,
      "ingredients": ["Alfredo Sauce", "Chicken", "Mushrooms"],
      "imageUrl": "https://media.istockphoto.com/id/1287249478/photo/pizza-chef-preparing-pizza-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=STeFTmhZE_W1QIr6AWZvYp3CzxlFPq21cwl4CvPgFMY="
    },
    {
      "id": 17,
      "name": "Garlic Bread Pizza",
      "description": "Garlic-flavored crust with cheese and herbs.",
      "price": "₹399",
      "rating": 4.2,
      "ingredients": ["Garlic", "Cheese", "Herbs"],
      "imageUrl": "https://media.istockphoto.com/id/2047992355/photo/indore-sarafa-bazaar-indias-midnight-food-capital-of-madhya-pradesh-a-treat-for-foodies.jpg?s=612x612&w=0&k=20&c=pEjb-YHRRsdDcZFuSJdg6JteXAz-kO38yTSOnZaNslE="
    },
    {
      "id": 18,
      "name": "Meat Lovers Pizza",
      "description": "Loaded with pepperoni, sausage, ham, and bacon.",
      "price": "₹749",
      "rating": 4.8,
      "ingredients": ["Pepperoni", "Sausage", "Ham", "Bacon"],
      "imageUrl": "https://media.istockphoto.com/id/2161402350/photo/delicious-gourmet-pepperoni-pizza-with-roasted-and-crunchy-cream-cheese-ready-to-eat.jpg?s=612x612&w=0&k=20&c=hDM4PIZXaqUwAef6AAyoKyCwU4IsWKdAATKLVcK5zU4="
    },
    {
      "id": 19,
      "name": "Supreme Pizza",
      "description": "A mix of meats, veggies, and cheese on a thick crust.",
      "price": "₹699",
      "rating": 4.9,
      "ingredients": ["Pepperoni", "Onions", "Olives", "Mozzarella"],
      "imageUrl": "https://media.istockphoto.com/id/2164825529/photo/pizza-with-prosciutto-cotto-ham-and-mushrooms.jpg?s=612x612&w=0&k=20&c=nA84Vm-QXVJi83SV60ds1Ix59w5xjfx4RROd7Ls0sQk="
    },
    {
      "id": 20,
      "name": "Spicy Veggie Pizza",
      "description": "A blend of spicy vegetables with jalapenos and hot sauce.",
      "price": "₹479",
      "rating": 4.3,
      "ingredients": ["Jalapenos", "Bell Peppers", "Onions"],
      "imageUrl": "https://media.istockphoto.com/id/181175167/photo/pizza.jpg?s=612x612&w=is&k=20&c=zRXpmvAMdxnOor0R83hCWXIhst5VazK9MeEtlP6tI6Y="
    }
  ];
  const handleAddToCart = () => {
    if (selectedPizza) {
      addToCart(selectedPizza);
      alert(`${selectedPizza.name} has been added to the cart!`);
    }
  };
  return (
    <div className="bg-zinc-500 py-10 min-h-screen">
    <h1 className="text-center text-4xl font-bold mb-10 text-gray-100">Flavorful Pizza Choices</h1>
    <div className="flex flex-wrap justify-center gap-10 mx-4">
      {pizzas.map((pizza) => (
        <Link
          key={pizza.id}
          to={`/pizza/${pizza.id}`}
          className="bg-zinc-300 w-full md:w-5/12 lg:w-2/5 xl:w-3/5 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300"
          style={{ height: '65%' }} 
        >
          <div className="h-64 w-full">
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{pizza.name}</h2>
              <div className="flex items-center">
                <FaStar className="text-yellow-500 mr-1" />
                <span className="text-lg font-semibold">{pizza.rating}</span>
              </div>
            </div>
            {pizza.discount && (
              <div className="text-red-600 font-bold text-sm mt-1">{pizza.discount}</div>
            )}
            <p className="text-gray-900 font-semibold mt-2">{pizza.description}</p>
            <ul className="text-sm text-gray-800 mt-2 font-semibold">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="inline-block mr-2">
                  <FaPizzaSlice className="text-red-500 inline-block mr-1" />
                  {ingredient}
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold text-yellow-600 mt-4">Price: {pizza.price}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  
  );
};

export default Home;
