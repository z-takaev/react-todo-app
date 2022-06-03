import React from 'react';

import AddTodo from './components/todos/CreateTodo';
import TodoList from './components/todos/TodoList';

function App() {
  return (
    <>
      <main className="container mx-auto px-4 sm:px-0">
        <AddTodo />
        <TodoList />
      </main>
    </>
  );
}

export default App;
