import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Filter = "All" | "Completed" | "Active";

const todosFilterState: Filter = "All" as Filter;

const filterSlice = createSlice({
  name: "filter",
  initialState: todosFilterState,
  reducers: {
    changeFilter: (state, { payload }: PayloadAction<Filter>) => {
      return (state = payload);
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
