import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-slate-100 h-screen">
      <div className="min-w-[320px] max-w-[480px] md:m-w-[560px] mx-auto">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
}
