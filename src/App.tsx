import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './pages/components/Todo';
import { TodoList } from './pages/layouts/TodoList';
import { Routes, Route, Outlet } from 'react-router-dom';
import { DetailTodo } from './pages/layouts/DetailTodo';
import { AddTodo } from './pages/layouts/AddTodo';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
        <Route path=":todoId" element={<DetailTodo />} />
        <Route path="add" element={<AddTodo />} />
      </Routes>
    </>
  );
}

export default App;
