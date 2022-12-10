import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../assets/hooks.js";
import { addTodo } from "../../redux/todos/todosSlice.js";

type FormValues = {
  todo: string;
};

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { todo } = data;
    dispatch(addTodo({ todo, completed: false, id: nanoid() }));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ todo: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <span className="absolute top-1/2 -translate-y-1/2 left-5 w-6 h-6 border-2 rounded-full  " />
      <input
        {...register("todo")}
        placeholder="Create a new todo..."
        className="w-full pl-16 rounded-xl bg-white py-5 focus:outline-none"
      />
    </form>
  );
}
