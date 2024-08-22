// 1. store 생성
import { createStore } from "redux";
// 6. 리듀서 함수 스토어에 연결해주기
import todoReducer from "./reducers";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const store = createStore(todoReducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
    filter: store.getState().filter,
  });
});

export default store;
