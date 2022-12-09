import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../assets/hooks";
import { addTodo } from "../../redux/todos/todosSlice";

type FormValues = {
  todo: string;
};

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { todo } = data;
    dispatch(addTodo(todo));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ todo: "" });
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("todo")} className="w-full" />
    </form>
  );
}
