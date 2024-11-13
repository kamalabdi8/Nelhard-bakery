import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error("Error fetching cart items:", error));
  }, []);

  const addItem = (item) => {
    axios.post('http://localhost:3001/cart', item)
      .then(response => setCartItems([...cartItems, response.data]));
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`)
      .then(() => setCartItems(cartItems.filter(item => item.id !== id)));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => deleteItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
