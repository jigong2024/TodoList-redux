import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { addTodo, setFilter } from "../store/actions";
import "../assets/TodoList.css";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");

  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const goToHome = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAdd = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleFilterChange = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "ACTIVE") return !todo.completed;

    return true;
  });

  return (
    <div className="background">
      <img className="book" src="/book.png" alt="book" onClick={goToHome} />{" "}
      <br />
      <span className="Home">Home</span>
      <div className="todo-container">
        <h1>My TodoList</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="오늘의 할일을 적어주세요!"
            value={newTodo}
            onChange={handleInputChange}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <div className="threebtns">
          <button onClick={() => handleFilterChange("ALL")}>All</button>
          <button onClick={() => handleFilterChange("COMPLETED")}>
            Completed
          </button>
          <button onClick={() => handleFilterChange("ACTIVE")}>Active</button>
        </div>
        <div className="list-container">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
