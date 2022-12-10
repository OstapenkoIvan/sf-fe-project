import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filterSlice.js";
import { todosReducer } from "./todos/todosSlice.js";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
