import { Link, Route, Routes } from "react-router-dom";
import Counter from "./components/counters/Counter.jsx";
import Todos from "./components/todoSlice/Todos.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#553e84] text-white flex flex-col items-center justify-center">

      {/* Hero Section */}
      <h1 className="text-4xl md:text-5xl font-bold mb-5 text-center">
        Welcome To Redux Toolkit 
      </h1>

      {/* Navigation Cards */}
      <div className="flex gap-6">
        <Link
          to="/"
          className="bg-white text-black px-6 py-4 rounded-lg shadow hover:scale-105 transition"
        >
          Counter App
        </Link>

        <Link
          to="/todo"
          className="bg-white text-black px-6 py-4 rounded-lg shadow hover:scale-105 transition"
        >
          Todo App
        </Link>
      </div>

      {/* Routes */}
      <div className="w-full mt-10 bg-white text-black p-6 rounded-t-3xl">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}