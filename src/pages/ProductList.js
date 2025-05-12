import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import "./ProductList.css";

const plantData = [
  { id: 1, name: "Monstera", price: 25, category: "Tropical", img: "https://i.imgur.com/1.jpg" },
  { id: 2, name: "Snake Plant", price: 20, category: "Succulent", img: "https://i.imgur.com/2.jpg" },
  { id: 3, name: "Peace Lily", price: 18, category: "Flowering", img: "https://i.imgur.com/3.jpg" },
  { id: 4, name: "Fiddle Leaf Fig", price: 30, category: "Tropical", img: "https://i.imgur.com/4.jpg" },
  { id: 5, name: "Cactus", price: 15, category: "Succulent", img: "https://i.imgur.com/5.jpg" },
  { id: 6, name: "Orchid", price: 22, category: "Flowering", img: "https://i.imgur.com/6.jpg" },
];

const ProductList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [added, setAdded] = useState({});

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAdded((prev) => ({ ...prev, [plant.id]: true }));
  };

  const categories = ["Tropical", "Succulent", "Flowering"];

  return (
    <div className="product-list">
      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div className="products">
            {plantData.filter(p => p.category === cat).map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.img} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button
                  disabled={added[plant.id]}
                  onClick={() => handleAdd(plant)}
                >
                  {added[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
