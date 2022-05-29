import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import NotTodos from './NotTodos';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      {todos.length ? (
        <ul className="mt-12 w-full sm:w-[500px]">
          {todos.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}
        </ul>
      ) : (
        <NotTodos />
      )}
    </>
  );
}

export default TodoList;
