import { TodoModel } from './../../models/TodoModel';
import { todoService } from './../../services/TodoService';
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [] as TodoModel[]
    },

    reducers: {
        setTodoListData: (state, action) => {
            state.todos = action.payload;
        },
        addTodoToList: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodoFromList: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {setTodoListData, addTodoToList, deleteTodoFromList} = todoSlice.actions;

export default todoSlice.reducer;