
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/Navbar';
import './index.css';
import Topbar from './Components/Topbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import DetailsPage from './Components/pizzalist'; 
import Details from './Components/Details';
import Cart from './Components/cart';
import Contact from './Components/Contact';
import { useState } from 'react';
import Signup from './Components/Signup';
import Order from './Components/Orders';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
      setCart([...cart, pizza]); 
    };
  const pizzas = [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "description": "Classic margherita with fresh mozzarella, tomatoes, and basil.",
      "price": 399,
      "rating": 4.5,
      "ingredients": ["Tomatoes", "Mozzarella", "Basil"],
      "imageUrl": "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=QHrM65XqDQd3Z50r5cT2qV4nwctw6rNMM1JTlGEEVzI="
    },
    {
      "id": 2,
      "name": "Pepperoni Pizza",
      "description": "Spicy pepperoni with mozzarella cheese on a thin crust.",
      "price": 499,
      "rating": 4.8,
      "ingredients": ["Pepperoni", "Mozzarella", "Tomato Sauce"],
      "imageUrl": "https://media.istockphoto.com/id/1303119992/photo/pizza_margerita.jpg?s=612x612&w=0&k=20&c=0HZZMC10ySBYvMVAKUNzknkQ1E74q8NKwTV5_K6WK6M="
    },
    {
      "id": 3,
      "name": "BBQ Chicken Pizza",
      "description": "Grilled chicken with BBQ sauce and onions on a crispy base.",
      "price": 549,
      "rating": 4.7,
      "ingredients": ["Chicken", "BBQ Sauce", "Onions"],
      "imageUrl": "https://media.istockphoto.com/id/153444470/photo/pizza.jpg?s=612x612&w=0&k=20&c=F0VFx6Cful-Vqwvt8lT0Dz-n3yo67wC7-scdfHiwM6k="
    },
    {
      "id": 4,
      "name": "Veggie Pizza",
      "description": "Loaded with fresh vegetables and topped with mozzarella.",
      "price": 399,
      "rating": 4.4,
      "ingredients": ["Bell Peppers", "Onions", "Olives"],
      "imageUrl": "https://media.istockphoto.com/id/1258146053/photo/paneer-pizza.jpg?s=612x612&w=0&k=20&c=RrZWNbKZoSMzu6SNcq9DWB54_OJSSwQQu4UEs6U0Y4g="
    },
    {
      "id": 5,
      "name": "Cheese Burst Pizza",
      "description": "Cheesy delight with a gooey, cheesy filling inside the crust.",
      "price": 599,
      "rating": 4.9,
      "ingredients": ["Cheese", "Tomato Sauce", "Herbs"],
      "imageUrl": "https://media.istockphoto.com/id/1341905666/photo/chinese-food-veg-pizza.jpg?s=612x612&w=0&k=20&c=ZMNxcRhL9uGV8zebXg5wGCh-5GzVBRHsu-lz7Sc06V4="
    },
    {
      "id": 6,
      "name": "Hawaiian Pizza",
      "description": "Pineapple and ham on a thin crust with mozzarella.",
      "price": 479,
      "rating": 4.3,
      "ingredients": ["Pineapple", "Ham", "Mozzarella"],
      "imageUrl": "https://media.istockphoto.com/id/1307275152/photo/healthy-gluten-free-cauliflower-crust-pizza-with-tomatoes-mushrooms-and-spinach-top-down-view.jpg?s=612x612&w=0&k=20&c=9GSnDAPtziK1qcLeCkrbO67jyOdcSa4kIf9lRIx_Yoc="
    },
    {
      "id": 7,
      "name": "Buffalo Chicken Pizza",
      "description": "Spicy buffalo chicken with ranch dressing on a crispy crust.",
      "price": 569,
      "rating": 4.6,
      "ingredients": ["Chicken", "Buffalo Sauce", "Ranch"],
      "imageUrl": "https://media.istockphoto.com/id/1291577269/photo/sliced-pizza-margherita.jpg?s=612x612&w=0&k=20&c=3k1pwv7Uej1WSN8-xlaVdpWCYbqaFcQo8d3lk5MsZXk="
    },
    {
      "id": 8,
      "name": "Mexican Pizza",
      "description": "Spicy Mexican-style pizza with jalapenos and hot sauce.",
      "price": 459,
      "rating": 4.4,
      "ingredients": ["Jalapenos", "Hot Sauce", "Mozzarella"],
      "imageUrl": "https://media.istockphoto.com/id/1333894310/photo/tasty-pepperoni-pizza-with-salami-white-mushrooms-mozzarella-and-vegetables-on-wooden.jpg?s=612x612&w=0&k=20&c=At6PdnPpBgzyjy94uHv_Wnr2AcJvUUASa0FsAsVi9AI="
    },
    {
      "id": 9,
      "name": "Four Cheese Pizza",
      "description": "Blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
      "price": 699,
      "rating": 4.9,
      "ingredients": ["Mozzarella", "Cheddar", "Parmesan", "Gouda"],
      "imageUrl": "https://media.istockphoto.com/id/1412292873/photo/vegetable-lover-pizza-with-tomato-onion-chili-powder-garlic-and-black-pepper-isolated-on.jpg?s=612x612&w=0&k=20&c=82gdYt353M5CaJDYuM86hWEgTd-qQmRzlKF-dD2xXpY="
    },
    {
      "id": 10,
      "name": "Tandoori Paneer Pizza",
      "description": "Tandoori paneer with capsicum and onions on a thick crust.",
      "price": 599,
      "rating": 4.7,
      "ingredients": ["Paneer", "Tandoori Masala", "Onions"],
      "imageUrl": "https://media.istockphoto.com/id/1287894191/photo/vertical-top-view-of-margherita-pizza-with-vegetables-and-herbs.jpg?s=612x612&w=0&k=20&c=ytqiR-VOy2QKYpS_MszV4d7v-WLg36t5r-p5_osbr0Q="
    },
    {
      "id": 11,
      "name": "Pesto Pizza",
      "description": "Italian-style pizza with pesto sauce and fresh mozzarella.",
      "price": 559,
      "rating": 4.5,
      "ingredients": ["Pesto Sauce", "Mozzarella", "Basil"],
      "imageUrl": "https://media.istockphoto.com/id/1364747500/photo/the-perfect-toppings.jpg?s=612x612&w=0&k=20&c=RHtlRLN1U0tXVlOOUyDiV7heGW7CUrUejVPEBdqSVDE="
    },
    {
      "id": 12,
      "name": "Mushroom Delight Pizza",
      "description": "Loaded with mushrooms and herbs, topped with mozzarella.",
      "price": 429,
      "rating": 4.6,
      "ingredients": ["Mushrooms", "Herbs", "Mozzarella"],
      "imageUrl": "https://media.istockphoto.com/id/1300928068/photo/bbq-and-pepperoni-pizzas-top-view.jpg?s=612x612&w=0&k=20&c=BYFF4PuH8sI3lwu1u-VeX8sW3dR86YssgbXM9W12gaE="
    },
    {
      "id": 13,
      "name": "Paneer Tikka Pizza",
      "description": "Spicy paneer tikka with onions, capsicum, and coriander.",
      "price": 499,
      "rating": 4.8,
      "ingredients": ["Paneer", "Onions", "Capsicum"],
      "imageUrl": "https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.jpg?s=612x612&w=0&k=20&c=ahj3y6ktAvzcINubn0a0BfvovLTGDx_J_aMju4szqVQ="
    },
    {
      "id": 14,
      "name": "Spinach & Feta Pizza",
      "description": "Healthy spinach with feta cheese and olive oil.",
      "price": 599,
      "rating": 4.4,
      "ingredients": ["Spinach", "Feta Cheese", "Olive Oil"],
      "imageUrl": "https://media.istockphoto.com/id/949903834/photo/indian-paneer-pizza-with-fresh-cottage-cheese-cubes-and-white-sauce.jpg?s=612x612&w=0&k=20&c=sb7osYrq3j8BItngXupV9isq_jljGxtwnxshUWIyo_Y="
    },
    {
      "id": 15,
      "name": "Chicken Tikka Pizza",
      "description": "Indian-style pizza with spicy chicken tikka on a thin crust.",
      "price": 649,
      "rating": 4.9,
      "ingredients": ["Chicken Tikka", "Onions", "Coriander"],
      "imageUrl": "https://media.istockphoto.com/id/181175528/photo/pizza-margarita.jpg?s=612x612&w=0&k=20&c=nkpFbhaHNNAcGSlBQMB1FWc-4eA5V79fZuEsAMUP2pY="
    },
    {
      "id": 16,
      "name": "Alfredo Pizza",
      "description": "Creamy Alfredo sauce with chicken and mushrooms.",
      "price": 529,
      "rating": 4.7,
      "ingredients": ["Alfredo Sauce", "Chicken", "Mushrooms"],
      "imageUrl": "https://media.istockphoto.com/id/1287249478/photo/pizza-chef-preparing-pizza-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=STeFTmhZE_W1QIr6AWZvYp3CzxlFPq21cwl4CvPgFMY="
    },
    {
      "id": 17,
      "name": "Garlic Bread Pizza",
      "description": "Garlic-flavored crust with cheese and herbs.",
      "price": 399,
      "rating": 4.2,
      "ingredients": ["Garlic", "Cheese", "Herbs"],
      "imageUrl": "https://media.istockphoto.com/id/2047992355/photo/indore-sarafa-bazaar-indias-midnight-food-capital-of-madhya-pradesh-a-treat-for-foodies.jpg?s=612x612&w=0&k=20&c=pEjb-YHRRsdDcZFuSJdg6JteXAz-kO38yTSOnZaNslE="
    },
    {
      "id": 18,
      "name": "Meat Lovers Pizza",
      "description": "Loaded with pepperoni, sausage, ham, and bacon.",
      "price": 749,
      "rating": 4.8,
      "ingredients": ["Pepperoni", "Sausage", "Ham", "Bacon"],
      "imageUrl": "https://media.istockphoto.com/id/2161402350/photo/delicious-gourmet-pepperoni-pizza-with-roasted-and-crunchy-cream-cheese-ready-to-eat.jpg?s=612x612&w=0&k=20&c=hDM4PIZXaqUwAef6AAyoKyCwU4IsWKdAATKLVcK5zU4="
    },
    {
      "id": 19,
      "name": "Supreme Pizza",
      "description": "A mix of meats, veggies, and cheese on a thick crust.",
      "price": 699,
      "rating": 4.9,
      "ingredients": ["Pepperoni", "Onions", "Olives", "Mozzarella"],
      "imageUrl": "https://media.istockphoto.com/id/2164825529/photo/pizza-with-prosciutto-cotto-ham-and-mushrooms.jpg?s=612x612&w=0&k=20&c=nA84Vm-QXVJi83SV60ds1Ix59w5xjfx4RROd7Ls0sQk="
    },
    {
      "id": 20,
      "name": "Spicy Veggie Pizza",
      "description": "A blend of spicy vegetables with jalapenos and hot sauce.",
      "price": 479,
      "rating": 4.3,
      "ingredients": ["Jalapenos", "Bell Peppers", "Onions"],
      "imageUrl": "https://media.istockphoto.com/id/181175167/photo/pizza.jpg?s=612x612&w=is&k=20&c=zRXpmvAMdxnOor0R83hCWXIhst5VazK9MeEtlP6tI6Y="
    }
  ]
  return (
    <Router>
    

        <MyNavbar/>
      <Topbar isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={isAuthenticated ? <DetailsPage /> : <Home />} />
        //         <Route path="/pizza/details/:id" element={<Details pizzas={pizzas} addToCart={addToCart} />} /> {/* Pass addToCart */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}  setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
