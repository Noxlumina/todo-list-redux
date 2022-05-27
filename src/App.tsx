import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './pages/components/Todo';
import { TodoList } from './pages/layouts/TodoList';
import { Routes, Route, Outlet } from 'react-router-dom';
import { DetailTodo } from './pages/layouts/DetailTodo';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
        <Route path=":todoId" element={<DetailTodo />} />
      </Routes>
    </>
  );
}

export default App;
