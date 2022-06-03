import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  todos: [{ id: Date.now(), text: 'Todo title', isCompleted: true }],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add(state, action) {
      const todo = {
        id: v4(),
        text: action.payload,
        isCompleted: false,
      };
      state.todos = [todo, ...state.todos];
    },

    change(state, action) {
      const { id, text } = action.payload;
      const copy = [...state.todos];
      const todo = copy.find((todo) => todo.id === id);
      todo.text = text;
      state.todos = copy;
    },

    toggle(state, action) {
      const id = action.payload;
      const copy = [...state.todos];
      const todo = copy.find((todo) => todo.id === id);
      todo.isCompleted = !todo.isCompleted;
      state.todos = copy;
    },

    remove(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, change, toggle, remove } = todosSlice.actions;

export default todosSlice.reducer;
