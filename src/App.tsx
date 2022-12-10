import React from "react";
import TodoFooter from "./components/TodoFooter/TodoFooter.jsx";
import TodoForm from "./components/TodoForm/TodoForm.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import { selectAllTodos } from "./redux/todos/todosSelectors.js";
import { useAppSelector } from "./assets/hooks.js";
import { useMediaQuery } from "react-responsive";
import TodoControls from "./components/TodoControls/TodoControls.js";
import Header from "./components/Header/Header.js";

export default function App() {
  const todoList = useAppSelector(selectAllTodos);
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const itemsCompleted = todoList.filter(
    (todo) => todo.completed === true
  ).length;

  return (
    <section className="bg-slate-100 h-screen pt-[15%] bg-hero_mobile min-[375px]:bg-hero_desktop bg-contain bg-no-repeat w-full">
      <div className="max-[500px]:min-w-[320px] max-[500px]:max-w-[350px] w-[480px] mx-auto">
        <Header />
        <TodoForm />
        {!!todoList.length ? (
          <>
            {" "}
            <TodoList todoList={todoList} />
            <TodoFooter todoList={todoList} itemsCompleted={itemsCompleted} />
            {isMobile && <TodoControls completed={itemsCompleted} />}
          </>
        ) : null}
      </div>
    </section>
  );
}
