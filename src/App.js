import './App.css';
import { Route, Routes } from 'react-router-dom';
import Food from './components/Food';
import Recipe from './components/Recipe';

function App() { 
  return (
    <Routes>
      <Route path='/' element={<Food />} />
      <Route path='/:mealid' element={<Recipe />} />
    </Routes>
  );
}

export default App;
