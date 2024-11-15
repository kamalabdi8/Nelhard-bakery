import React from 'react';
import styles from '../index.css'


const Cart = ({ cart, removeFromCart }) => {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((meal) => (
                    <div class="ui three stackable cards">
                    <div className="cart-item" key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="cart-img" />
                        <div className="cart-details">
                            <h2>{meal.strMeal}</h2>
                            <button onClick={() => removeFromCart(meal.idMeal)}>Remove</button>
                        </div>
                    </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
