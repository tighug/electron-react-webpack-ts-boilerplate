import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

let nextTodoId = 1;

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 0,
      text: "one",
      completed: true,
    },
  ] as ToDo[],
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Pick<ToDo, "id" | "text">>) {
        const { id, text } = action.payload;

        state.push({ id, text, completed: false });
      },
      prepare(text: string) {
        return { payload: { id: nextTodoId++, text } };
      },
    },
    toggleTodo(state, action: PayloadAction<Pick<ToDo, "id">>) {
      const todo = state.find((todo) => todo.id === action.payload.id);

      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
