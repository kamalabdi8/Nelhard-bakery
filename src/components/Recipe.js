import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Recipe/Recipe.module.css';

const Recipe = () => {
    const [data, setData] = useState();
    const { mealid } = useParams();

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        setData(jsonData.meals[0]);
    };

    useEffect(() => {
        if (mealid) {
            myFun();
        }
    }, [mealid]);

    return (
        <>
            {!data ? "Not Found" :
                <div className='msg'>
                    <img src={data.strMealThumb} alt={data.strMeal} />
                    <div className='info'>
                        <h1>Recipe Detail's</h1>
                        <button>{data.strMeal}</button>
                        <h3>Instructions :</h3>
                        <p>{data.strInstructions}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default Recipe;
