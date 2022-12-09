import { useState } from "react";
import { TodoState } from "../../redux/todos/todosSlice";
import iconSprite from "../../assets/iconSprite.svg";
import { useAppDispatch } from "../../assets/hooks";
import { deleteTodo, changeComleted } from "../../redux/todos/todosSlice";

export default function TodoItem({ data }: { data: TodoState }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { id, todo, completed } = data;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(deleteTodo(id));
  };

  const handleChange = () => {
    dispatch(changeComleted({ id, todo, completed: !completed }));
  };

  return (
    <li className="flex items-center justify-between px-5 py-4 border-solid border-b border-slate-300">
      <label className="flex relative group" onChange={handleChange}>
        {" "}
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted((prev) => !prev)}
          className="appearance-none w-6 h-6 border-2 group-hover:border-sky-500 rounded-full mr-5 cursor-pointer focus:outline-none peer checked:bg-blue-500 "
        />
        <svg className="w-3 h-3 top-1/2 -translate-y-1/2 left-1.5 cursor-pointer absolute opacity-0 peer-checked:opacity-100 ">
          <use href={`${iconSprite}#icon-check`}></use>
        </svg>
        <span className="cursor-pointer peer-checked:text-slate-300 peer-checked:line-through">
          {todo}
        </span>
      </label>
      <svg className="w-5 h-5 cursor-pointer" onClick={handleClose}>
        <use href={`${iconSprite}#icon-cross`}></use>
      </svg>
    </li>
  );
}
