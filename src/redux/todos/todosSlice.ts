import { createSlice } from "@reduxjs/toolkit";
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
    addTodo: (state, { payload }: PayloadAction<TodoState>) => {
      state.push(payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      return state.filter((contact) => contact.id !== payload);
    },
    deleteCompletedTodos: (state, { payload }: PayloadAction<TodoState[]>) => {
      return (state = payload);
    },
    changeComleted: (state, { payload }: PayloadAction<TodoState>) => {
      return (state = [
        ...state.filter((todo) => todo.id !== payload.id),
        payload,
      ]);
    },
  },
});

export const { addTodo, deleteTodo, changeComleted, deleteCompletedTodos } =
  todosSlice.actions;
export const todosReducer = todosSlice.reducer;
