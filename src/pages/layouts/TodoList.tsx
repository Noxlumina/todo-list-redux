import { Button} from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTodoListData, deleteTodoFromList, editTodo } from '../../app/features/todoSlice';
import { RootState } from '../../app/store';
import { TodoModel } from '../../models/TodoModel';
import { todoService } from '../../services/TodoService';
import { Todo } from '../components/Todo';

export const TodoList = () => {

  //Ajout selector et dispatch
  const dispatch = useDispatch()
  const todosData = useSelector((state: RootState) => state.todos.todos)

  const _service = todoService;

  
  useEffect(() => {
    getTodoList()
  }, [])
  

const getTodoList = (): void => {
  _service.findAll().then((data: TodoModel[]) => {
    dispatch(setTodoListData(data))
  })
}
  
  const deleteTodo = (id: number) => {
    _service.delete(id).then(() => dispatch(deleteTodoFromList(id)))
  }

  const saveTodo = (todo: TodoModel) => {
    // let newTodoList = todosData.map(elem => elem.id === todo.id ? todo : elem)
    // setTodoList(newTodoList)
    _service.put(todo).then(() => dispatch(editTodo(todo)));
  }

  return (
    <>
      <div style={{"display":"flex", "justifyContent":"space-around", "width": "75%", "margin": "0 auto", "flexWrap":"wrap"}}>
        { 
          todosData.length > 0 && 
          todosData.map((todo: TodoModel, index: number) => <Todo key={index} todo={todo} deleteTodo={deleteTodo} saveTodo={saveTodo}/>)
        }
      </div>
      <Link to="add"><Button>Ajouter un todo</Button></Link>
    </> 
  )
}
