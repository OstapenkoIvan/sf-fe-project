import React from "react";
import { useAppSelector, useAppDispatch } from "../../assets/hooks";
import { selectAllTodos } from "../../redux/todos/todosSelectors";
import { deleteCompletedTodos } from "../../redux/todos/todosSlice";
import TodoControls from "../TodoControls/TodoControls";

export default function TodoFooter() {
  const allTodos = useAppSelector(selectAllTodos);
  const dispatch = useAppDispatch();
  const itemsLeft = allTodos.filter((todo) => todo.completed === true);

  const handleClick = () => {
    dispatch(deleteCompletedTodos(allTodos));
  };

  return (
    <section className="flex">
      <span>{`${itemsLeft.length} items left`}</span>
      <TodoControls />
      <button onClick={handleClick}>Clear completed</button>
    </section>
  );
}
