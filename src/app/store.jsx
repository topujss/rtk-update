import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from '../features/Counter/CounterSlice';
import TodoSlice from '../features/Todo/TodoSlice';

const store = configureStore({
  reducer: {
    countStore: CounterSlice,
    todoStore: TodoSlice,
  },
});

export default store;
