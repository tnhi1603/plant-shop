import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/"><h1 className="logo">Plant</h1></Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({total})</Link>
      </nav>
    </header>
  );
};

export default Header;
