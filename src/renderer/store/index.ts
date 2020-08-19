import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";

const reducer = combineReducers({ todos: todosReducer });

export type RootState = ReturnType<typeof reducer>;

const configuredStore = configureStore({ reducer });

export type Store = typeof configuredStore;

export default configuredStore;
