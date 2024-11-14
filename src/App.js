import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import { Route,Routes } from 'react-router-dom';
import Mealinfo from './components/MealInfo';
import Food from "./components/Food"
import Recipe from './components/Recipe';
 

function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Food/>}/>
      <Route path='/:mealid' element={<Recipe/>}/>
     </Routes>
      
  );
}
 
export default App;