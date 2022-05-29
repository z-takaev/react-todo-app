import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className="mt-12 w-full sm:w-[500px]">
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}

export default TodoList;
