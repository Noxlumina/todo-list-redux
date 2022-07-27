import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todoService } from "../../../services/TodoService";
import { setTodoListData } from "../todoSlice";

const defaultValues = {
  title: "",
  limitDate: "",
  done: false,
};

export const AddTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _service = todoService;

  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, register } = methods;

  const onSubmit = (data: any) => {
    _service.create(data).then((res) => {
      dispatch(setTodoListData(res));
    });
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">
        Titre
        <input defaultValue="" {...register("title")} />
      </label>
      <label htmlFor="">
        Date
        <input defaultValue="" {...register("limitDate")} />
      </label>

      <input type="submit" />
    </form>
  );
};
