import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Food = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("Search and Get Recipe's");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if (search === '') {
      setMsg('Please Enter Something');
    } else {
      try {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        setData(
          jsonData.meals.map((meal) => ({
            ...meal,
            price: (Math.random() * 20 + 5).toFixed(2), // Set initial random price
          }))
        );
        setMsg("Your Search Result's");
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    }
  };

  // POST: Add a new meal with specified data
  const addMeal = async (meal) => {
    try {
      const response = await fetch(`http://localhost:3000/meals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(meal), // Use the price already set in `myFun`
      });
      if (response.ok) {
        console.log('Meal added successfully');
        refreshData(); // Reload data to include new meal
      }
    } catch (error) {
      console.error('Error adding meal:', error);
    }
  };

  // PATCH: Update the price of an existing meal
  const updatePrice = async (mealId, newPrice) => {
    try {
      const response = await fetch(`http://localhost:3000/meals/${mealId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ price: newPrice }),
      });
      if (response.ok) {
        console.log('Price updated successfully');
        refreshData(); // Refresh data after updating the price
      }
    } catch (error) {
      console.error('Error updating price:', error);
    }
  };

  // Refresh data function to call after adding or updating
  const refreshData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/meals`); // Fetching from local API
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  return (
    <>
      <h1 className="head">FastFood APP</h1>
      <div className="container">
        <div className="searchBar">
          <input placeholder="Search Meals" type="text" onChange={handleInput} />
          <button onClick={myFun}>Search</button>
        </div>
        <h2 className="msg">{msg}</h2>
        <Cards detail={data} addMeal={addMeal} updatePrice={updatePrice} />
      </div>
    </>
  );
};

export default Food;
