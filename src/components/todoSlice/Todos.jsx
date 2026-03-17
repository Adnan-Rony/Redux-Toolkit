import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deletetodo, toggletodo } from "./todoSlice.js";

const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

     

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border w-80 px-2 py-1 mr-2"
        placeholder="Enter todo"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 mt-6 text-white px-3 py-1 rounded"
      >
        Add
      </button>

         {/* List */}
      <div className="mt-4">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center gap-2 mb-2">
            <li
              onClick={() => dispatch(toggletodo(todo.id))}
              className={`cursor-pointer text-xl ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.text}
            </li>

            <button
              onClick={() => dispatch(deletetodo(todo.id))}
              className="bg-red-500 text-white px-5 py-1 rounded"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
