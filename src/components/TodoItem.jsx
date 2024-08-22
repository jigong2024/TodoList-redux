import React from "react";
import { deleteTodo, toggleTodo } from "../store/actions";
import { useDispatch } from "react-redux";
import "../assets/TodoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="todolist">
      <span>🍀 {todo.text}</span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <button onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
    </div>
  );
};

export default TodoItem;
