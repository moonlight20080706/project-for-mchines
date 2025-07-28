import React from 'react';
import style from './Cart.module.css';

const Cart = ({ cartItems }) => {
  return (
    <div className={style.cart}>
      <h2>Savat: {cartItems.length} ta mahsulot</h2>
      <ul>
        {cartItems.map((item, i) => (
          <li key={i} className={style.cartItem}>
            <img src={item.thumbnail} alt={item.title} width={50} />
            <strong>{item.title}</strong> – ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
