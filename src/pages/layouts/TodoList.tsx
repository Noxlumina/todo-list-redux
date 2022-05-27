import React, { useState, useEffect } from 'react'
import { TodoModel } from '../../models/TodoModel';
import { todoService } from '../../services/TodoService';
import { Todo } from '../components/Todo';

export const TodoList = () => {

  const _service = todoService;
  const [todoList, setTodoList] = useState(new Array<TodoModel>())

  
  useEffect(() => {
    getTodoList()
  }, [])
  
  const getTodoList = (): void => {
    _service.findAll().then((data: TodoModel[]) => {
      setTodoList(data)
    })
  }
  
  const deleteTodo = (id: number) => {
    _service.delete(id);
    getTodoList();
  }

  const saveTodo = (todo: TodoModel) => {
    let newTodoList = todoList.map(elem => elem.id === todo.id ? todo : elem)
    setTodoList(newTodoList)
    _service.put(todo)
  }

  return (
    <div style={{"display":"flex", "justifyContent":"space-around", "width": "75%", "margin": "0 auto", "flexWrap":"wrap"}}>
      { 
        todoList.length > 0 && 
        todoList.map((todo: TodoModel, index: number) => <Todo key={index} todo={todo} deleteTodo={deleteTodo} saveTodo={saveTodo}/>)
      }
    </div>
  )
}
