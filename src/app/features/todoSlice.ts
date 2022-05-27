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
        },
        editTodo: (state, {payload}) => {
            console.log("payload", payload.id)
            state.todos = state.todos.map((todo) => {
                if (todo.id === payload.id){
                    return {... payload, id: payload.id}
                } else {
                    return todo;
                }
            })
        }
    }
})

export const {setTodoListData, addTodoToList, deleteTodoFromList, editTodo} = todoSlice.actions;

export default todoSlice.reducer;