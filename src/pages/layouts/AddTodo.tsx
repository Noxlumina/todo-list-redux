import { useForm } from 'react-hook-form';

const defaultValues = {
  titleValue: "",
  limitDateValue: "",
};

export const AddTodo = () => {
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, register } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register("titleValue")} />
        <input defaultValue="" {...register("limitDateValue")} />

        <input type="submit" />
    </form>
  );
};