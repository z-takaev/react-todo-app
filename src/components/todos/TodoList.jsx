import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';

import TodoItem from './TodoListItem';
import NotTodos from './NotTodos';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      {todos.length ? (
        <TransitionGroup className="mt-12 w-full sm:w-[500px]">
          {todos.map((item) => (
            <CSSTransition key={item.id} timeout={700} classNames="todo">
              <TodoItem todo={item} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <NotTodos />
      )}
    </>
  );
}

export default TodoList;
