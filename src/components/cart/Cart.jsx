// src/components/CartIcon.jsx
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
      Togirlash ishlari olib borilmoqda
    </Link>
  );
};

export default CartIcon;
