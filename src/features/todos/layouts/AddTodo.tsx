import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTodoListData } from '../todoSlice';
import { todoService } from '../../../services/TodoService';

const defaultValues = {
    title: "",
    limitDate: "",
    done: false
};

export const AddTodo = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const _service = todoService;

    const methods = useForm({ defaultValues: defaultValues });
    const { handleSubmit, reset, control, setValue, register } = methods;

    const onSubmit = (data: any) => {
        _service.create(data).then((res) => {
            dispatch(setTodoListData(res))
        })
        navigate("/", {replace: true})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="" {...register("title")} />
            <input defaultValue="" {...register("limitDate")} />

            <input type="submit" />
        </form>
    );
};