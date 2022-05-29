import React from 'react';

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 sm:px-0">
        {/* <AddTodo /> */}
        <TodoList />
      </main>
    </>
  );
}

export default App;
