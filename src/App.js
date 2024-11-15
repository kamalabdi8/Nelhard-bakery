import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './Pages/Home'; 
import SignIn from './Pages/SignIn'; 
import SignUp from './Pages/SignUp'; 
import './App.css'; 

function App() {
  return (
    <>
      <Navbar /> {}
      <Routes> {}
        <Route path="/" element={<Home />} /> {}
        <Route path="/signin" element={<SignIn />} /> {}
        <Route path="/signup" element={<SignUp />} /> {}
      </Routes>
    </>
  );
}

export default App;
