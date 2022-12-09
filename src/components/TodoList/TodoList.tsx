import React from "react";
import { useAppSelector } from "../../assets/hooks";
import { todosSelectors } from "../../redux/todos";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const { todos } = useAppSelector(todosSelectors.allTodos);

  return (
    <ul className="w-full">
      {todos
        ? todos.map((todo) => <TodoItem key={todo.id} data={todo} />)
        : null}
    </ul>
  );
}
