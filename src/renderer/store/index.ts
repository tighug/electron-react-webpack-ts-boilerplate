import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";

const reducer = combineReducers({ todos: todosReducer });

export type RootState = ReturnType<typeof reducer>;

export default configureStore({ reducer });
