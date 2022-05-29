import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [{ id: Date.now(), text: 'Todo text', completed: false }],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    update: (state, action) => {
      const { id, todo } = action.payload;
      state.todos = state.todos.map((t) => (t.id === id ? todo : t));
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update } = todosSlice.actions;

export default todosSlice.reducer;
