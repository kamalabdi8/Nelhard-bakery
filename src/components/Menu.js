import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => setMeals(response.data.categories))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idCategory}>{meal.strCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
