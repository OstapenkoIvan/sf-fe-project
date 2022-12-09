import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  readonly todo: string;
  readonly id: string;
  readonly completed: boolean;
}

const todosInitialState: TodoState[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = { todo: action.payload, completed: false, id: nanoid() };
      state.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
