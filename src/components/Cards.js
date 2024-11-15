import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Cards/Cards.module.css';

const Cards = ({ detail }) => {
    console.log(detail);
    return (
        <div className='meals'>
            {!detail ? "Sorry Data Not Found" : detail.map((curItem, index) => {
                console.log(curItem);
                return (
                    <div className='mealImg' key={index}>
                        <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                        <p>{curItem.strMeal}</p>
                        <NavLink to={`/${curItem.idMeal}`}>
                            <button>Recipe</button>
                        </NavLink>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
