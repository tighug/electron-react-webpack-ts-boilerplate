import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { ToDo, addTodo } from "../store/todos";

export default function ToDoPages() {
  const todos = useSelector<RootState, ToDo[]>((state) => state.todos);
  const dispatch = useDispatch();

  const todoLists = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

  return (
    <div>
      <button onClick={() => dispatch(addTodo("new"))}>Add</button>
      <ul>{todoLists}</ul>
    </div>
  );
}
