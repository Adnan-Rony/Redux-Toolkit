// src/App.jsx
import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/counters/Counter.jsx";
import Todos from "./components/todoSlice/Todos.jsx";

import Cart from "./components/ProductCart/Cart.jsx";
import { useSelector } from "react-redux";
import Products from "./components/ProductCart/Products.jsx";

export default function App() {
  const cartItems = useSelector((state) => state.cart?.items?.length || 0);

  return (
    <div className="min-h-screen bg-[#553e84] text-white flex flex-col items-center justify-start pt-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center"> 
        Redux Toolkit Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <Link
          to="/"
          className="bg-white text-black px-6 py-4 rounded-lg shadow hover:scale-105 transition transform text-center"
        >
          Counter
        </Link>
        <Link
          to="/todo"
          className="bg-white text-black px-6 py-4 rounded-lg shadow hover:scale-105 transition transform text-center"
        >
          Todo
        </Link>
        <Link
          to="/products"
          className="bg-white text-black px-6 py-4 rounded-lg shadow hover:scale-105 transition transform text-center"
        >
          Products{" "}
          
        </Link>
        <Link
          to="/cart"
          className="bg-white text-black px-6 py-4 rounded-lg shadow hover:scale-105 transition transform text-center"
        >
          Cart{" "}
          {cartItems > 0 && (
            <span className="ml-2 bg-red-500 text-white px-2 rounded-full">
              {cartItems}
            </span>
          )}
        </Link>
      </div>

      <div className="w-full max-w-5xl bg-white text-black p-6 rounded-t-3xl min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}
