// src/components/CartIcon.jsx
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
      cart🛒
    </Link>
  );
};

export default CartIcon;
