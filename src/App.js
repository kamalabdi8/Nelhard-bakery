import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './components/About';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Cart from './components/Cart';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart((prevCart) => [...prevCart, meal]);
  };

  const removeFromCart = (idMeal) => {
    setCart(cart.filter((meal) => meal.idMeal !== idMeal));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
