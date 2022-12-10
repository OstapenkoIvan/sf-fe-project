import { RootState } from "../store.js";

export const selectAllTodos = (state: RootState) => state.todos;
