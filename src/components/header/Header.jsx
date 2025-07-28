import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" >
      <div className="logo">SDS MAX</div>
      <div className="header-right">
        <input type="text" placeholder="Qidirish..." className="search" />
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping icon"><span>0</span></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
