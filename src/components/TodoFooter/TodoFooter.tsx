import React from "react";
import { useAppDispatch } from "../../assets/hooks.js";
import {
  deleteCompletedTodos,
  TodoState,
} from "../../redux/todos/todosSlice.js";
import TodoControls from "../TodoControls/TodoControls.jsx";
import { useMediaQuery } from "react-responsive";

const TodoFooter = ({
  todoList,
  itemsCompleted,
}: {
  todoList: TodoState[];
  itemsCompleted: number;
}) => {
  const dispatch = useAppDispatch();
  const itemsLeft = todoList.filter((todo) => todo.completed === false);
  const isDesktop = useMediaQuery({ query: "(min-width: 501px)" });

  const handleClick = () => {
    dispatch(deleteCompletedTodos());
  };

  return (
    <section className="flex justify-between px-5 py-4 rounded-b-xl bg-white">
      <span className="text-slate-400">{`${itemsLeft.length} items left`}</span>
      {isDesktop && <TodoControls completed={itemsCompleted} />}
      <button
        onClick={handleClick}
        className="text-slate-400 hover:text-slate-600"
        disabled={!!!itemsCompleted}
      >
        Clear completed
      </button>
    </section>
  );
};

export default TodoFooter;
