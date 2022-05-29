import { configureStore } from '@reduxjs/toolkit';

import todos from './slices/todosSlice';

export const store = configureStore({
  reducer: { todos },
});
