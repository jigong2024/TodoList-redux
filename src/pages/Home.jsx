import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToTodoList = () => {
    navigate("/todos");
  };

  return (
    <div className="home-container">
      <div className="item-container">
        <h1>나만의 TodoList</h1>
        <div className="diary">
          <img src="/diary.png" alt="book" onClick={goToTodoList} />
          <span>다이어리를 클릭해주세요!</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
