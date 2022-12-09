import { useState } from "react";
import { TodoState } from "../../redux/todos/todosSlice";
import iconSprite from "../../assets/iconSprite.svg";

export default function TodoItem({ data }: { data: TodoState }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { id, todo, completed } = data;
  // ${iconSprite}#icon-check
  return (
    <li className="flex items-center justify-between mr-2 ml-2">
      <label>
        {" "}
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted((prev) => !prev)}
          className=""
        />
        <span>{todo}</span>
      </label>
      <svg className="w-3.5 h-3.5">
        <use href={`${iconSprite}#icon-cross`}></use>
      </svg>
    </li>
  );
}
