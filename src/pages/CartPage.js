import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalPrice}</p>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="cart-controls">
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </div>
          </div>
        </div>
      ))}
      <button className="checkout">Checkout (Coming Soon)</button>
      <Link to="/products" className="continue">Continue Shopping</Link>
    </div>
  );
};

export default CartPage;
