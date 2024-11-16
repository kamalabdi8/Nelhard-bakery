import React from 'react';
import styles from '../index.css'; // Ensure this file is properly imported

const Cart = ({ cart = [], removeFromCart }) => {  // Default value for cart is an empty array
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((meal) => (
                    <div className="ui three stackable cards" key={meal.idMeal}>
                        <div className="cart-item">
                            <img 
                                src={meal.strMealThumb} 
                                alt={meal.strMeal} 
                                className="cart-img" 
                            />
                            <div className="cart-details">
                                <h2>{meal.strMeal}</h2>
                                <button onClick={() => removeFromCart(meal.idMeal)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
