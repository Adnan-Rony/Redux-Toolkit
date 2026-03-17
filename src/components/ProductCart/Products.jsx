// src/components/ProductCart/Products.jsx
import React from "react";
import { useDispatch } from "react-redux";
import products from './products';
import { addToCart } from "./cartSlice.js";


export default function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="border p-3 rounded shadow flex flex-col items-center">
          <img src={p.image} alt={p.name} className="mb-2 w-32 h-32 object-cover" />
          <h2 className="font-semibold">{p.name}</h2>
          <p>${p.price}</p>
          <button
            onClick={() => handleAddToCart(p)}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}