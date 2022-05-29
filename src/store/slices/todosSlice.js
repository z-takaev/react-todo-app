import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: Date.now(), text: 'Todo text', isCompleted: true }],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      const todo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      };
      state.todos = [todo, ...state.todos];
    },

    changeTodo: (state, action) => {
      const { id, text } = action.payload;
      const copy = [...state.todos];
      const todo = copy.find((todo) => todo.id === id);
      todo.text = text;
      state.todos = copy;
    },

    toggleTodo: (state, action) => {
      const id = action.payload;
      const copy = [...state.todos];
      const todo = copy.find((todo) => todo.id === id);
      todo.isCompleted = !todo.isCompleted;
      state.todos = copy;
    },

    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, changeTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
