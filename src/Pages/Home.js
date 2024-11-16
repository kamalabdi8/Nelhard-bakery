import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = ({ addToCart }) => {
  const [query, setQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = async (searchQuery) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      if (response.data.meals) {
        setMeals(response.data.meals);
      } else {
        setMeals([]);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to load meals.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query === '') {
      setMeals([]);
    } else {
      fetchMeals(query);
    }
  }, [query]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="home-container">
      <h1>Search for a Meal</h1>

      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for meals..."
          className="search-input"
        />
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {meals.length > 0 ? (
        <div className="meal-grid">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="meal-image"
              />
              <div className="meal-info">
                <h2 className="meal-title">{meal.strMeal}</h2>
                <a
                  href={`https://www.themealdb.com/meal.php?c=${meal.idMeal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meal-link"
                >
                  View Recipe
                </a>
                <button
                  onClick={() => addToCart(meal)}
                  className="add-to-cart-button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-meals">No meals found.</div>
      )}
    </div>
  );
};

export default Home;
