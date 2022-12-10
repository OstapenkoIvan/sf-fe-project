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
      return state.filter((todo) => todo.id !== payload);
    },
    deleteCompletedTodos: (state) => {
      return state.filter((todo) => todo.completed === false);
    },
    changeComleted: (state, { payload }: PayloadAction<TodoState>) => {
      return (state = [
        ...state.filter((todo) => todo.id !== payload.id),
        payload,
      ]);
    },
    shuffleList: (state, action: PayloadAction<TodoState[]>) => {
      return (state = action.payload);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  changeComleted,
  deleteCompletedTodos,
  shuffleList,
} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
