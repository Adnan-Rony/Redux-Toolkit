import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./components/counters/CounterSlice.js";

export default function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (id) => dispatch(increment(id));
  const handleDecrement = (id) => dispatch(decrement(id));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Redux Counter App</h1>

      {/* Total */}
      <p className="mb-4 font-semibold">
        Total Count: {counters.reduce((sum, c) => sum + c.value, 0)}
      </p>

      {/* Counters */}
      {counters.map((c) => (
        <div key={c.id} className="flex items-center gap-2 mb-2">
          <span className="w-24">Counter {c.id}: {c.value}</span>
          <button
            onClick={() => handleDecrement(c.id)}
            disabled={c.value === 0}
            className="px-2 py-1 bg-red-500 text-white rounded disabled:opacity-50"
          >-</button>
          <button
            onClick={() => handleIncrement(c.id)}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >+</button>
        </div>
      ))}
    </div>
  );
}