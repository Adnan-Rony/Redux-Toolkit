// src/components/Cart.jsx
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "./cartSlice.js";


export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (id) => dispatch(increaseQty(id));
  const handleDecrease = (id) => dispatch(decreaseQty(id));
  const handleRemove = (id) => dispatch(removeFromCart(id));

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0)
    return <p className="p-4 text-center">Cart is empty</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Shopping Cart</h1>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-4 border p-3 rounded"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-16 object-cover"
          />
          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p>${item.price}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleDecrease(item.id)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2 className="text-xl font-bold mt-4">
        Total: ${totalPrice.toFixed(2)}
      </h2>
    </div>
  );
}
