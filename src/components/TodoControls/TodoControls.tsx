import React from "react";
import { useAppSelector, useAppDispatch } from "../../assets/hooks.js";
import { selectFilter } from "../../redux/filter/filterSelectors.js";
import { changeFilter } from "../../redux/filter/filterSlice.js";
import { Filter as FilterType } from "../../redux/filter/filterSlice.js";

export default function TodoControls({ completed }: { completed: number }) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value as FilterType));
  };

  return (
    <ul className="flex gap-2 max-[500px]:bg-white max-[500px]:mt-4 max-[500px]:rounded-xl max-[500px]:px-5 max-[500px]:py-4 max-[500px]:justify-center ">
      <li>
        <input
          type="radio"
          name="All"
          value="All"
          id="all_button"
          checked={filter === ("All" as FilterType)}
          onChange={handleChange}
          className="sr-only peer"
        />
        <label
          htmlFor="all_button"
          className="text-slate-400 peer-checked:text-blue-600 cursor-pointer hover:text-slate-600"
        >
          All
        </label>
      </li>
      <li>
        <input
          type="radio"
          name="Active"
          value="Active"
          id="active_button"
          checked={filter === ("Active" as FilterType)}
          onChange={handleChange}
          className="sr-only peer"
        />

        <label
          htmlFor="active_button"
          className="text-slate-400 peer-checked:text-blue-600 cursor-pointer hover:text-slate-600"
        >
          Active
        </label>
      </li>
      <li>
        <input
          type="radio"
          name="Completed"
          value="Completed"
          id="completed_button"
          checked={filter === ("Completed" as FilterType)}
          onChange={handleChange}
          disabled={!!!completed}
          className="sr-only peer"
        />
        <label
          htmlFor="completed_button"
          className="text-slate-400 peer-checked:text-blue-600 cursor-pointer hover:text-slate-600"
        >
          Completed
        </label>
      </li>
    </ul>
  );
}
