// src/components/CartIcon.jsx
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
     <h1> T{"o'g'"}irlash ishlari olib borilmoqda</h1>
    </Link>
  );
};

export default CartIcon;
