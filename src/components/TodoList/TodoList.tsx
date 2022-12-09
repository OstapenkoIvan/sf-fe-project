import React from "react";
import { useAppSelector } from "../../assets/hooks";
import { selectAllTodos } from "../../redux/todos/todosSelectors";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const todos = useAppSelector(selectAllTodos);

  return (
    <ul className="w-full bg-white mt-4 rounded-t-xl">
      {todos
        ? todos.map((todo) => <TodoItem key={todo.id} data={todo} />)
        : null}
    </ul>
  );
}
