import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cards/Cards.module.css';

const Cards = ({ detail, addMeal, updatePrice }) => {
  const handlePriceUpdate = (mealId) => {
    const newPrice = prompt("Enter new price:");
    if (newPrice) {
      updatePrice(mealId, newPrice);
    }
  };

  const handleAddMeal = (meal) => {
    addMeal(meal);
  };

  return (
    <div className="meals">
      {!detail
        ? "Sorry, Data Not Found"
        : detail.map((curItem) => (
            <div className="mealImg" key={curItem.idMeal}>
              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
              <p>{curItem.strMeal}</p>
              <p>Price: ${curItem.price}</p> {/* Display price */}
              <NavLink to={`/${curItem.idMeal}`}>
                <button>Recipe</button>
              </NavLink>
              <button onClick={() => handlePriceUpdate(curItem.idMeal)}>Update Price</button>
              <button onClick={() => handleAddMeal(curItem)}>Add Meal</button>
            </div>
          ))}
    </div>
  );
};

export default Cards;
