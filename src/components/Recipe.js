import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Recipe/Recipe.module.css';

const Recipe = () => {
  const [data, setData] = useState();
  const { meal } = useParams(); // Get meal id from route params

  const fetchMealData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);
    const jsonData = await response.json();
    setData(jsonData.meals[0]);
  };

  useEffect(() => {
    if (meal) {
      fetchMealData();
    }
  }, [meal]); // Trigger effect when `meal` changes

  if (!data) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="recipe-container">
      <h1>{data.strMeal}</h1>
      <img src={data.strMealThumb} alt={data.strMeal} />
      <h3>Instructions:</h3>
      <p>{data.strInstructions}</p>
      {/* Display other relevant information if needed */}
    </div>
  );
};

export default Recipe;
