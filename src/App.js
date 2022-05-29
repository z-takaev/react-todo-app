import React from 'react';

import AddTodo from './components/CreateTodo';
import TodoList from './components/todos';

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
