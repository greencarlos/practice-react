import React, { useState } from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  const [list, setList] = useState([
    "Buy milk",
    "Buy cheese",
    "Gather infinity stones",
  ]);

  const addTodo = (item) => {
    setList([...list, item]);
  };

  const deleteTodo = (item, i) => {
    alert(`You are currently deleting "${item}"`);
    const front = list.slice(0, i);
    const rest = list.slice(i + 1, list.length);
    setList([...front, ...rest]);
  };

  return (
    <>
      <h1>Todo List</h1>
      <input className="input" />
      <button
        className="submit"
        onClick={(e) => {
          let newTodo = document.querySelector(".input").value;
          addTodo(newTodo);
          newTodo = "";
        }}
      >
        Submit
      </button>
      <ul>
        {list.map((item, idx) => (
          <li onClick={() => deleteTodo(item, idx)}>{item}</li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<TodoList />, document.querySelector(".todolist"));
