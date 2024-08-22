import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

// 7. 리덕스 스토어 리액트에 연결해주기
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
