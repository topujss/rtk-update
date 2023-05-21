import { createSlice } from '@reduxjs/toolkit';

const myTime = setInterval(() => {
  const date = new Date();
  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}, 1000);

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    allTodo: [],
    date: '',
    msg: '',
  },
  reducers: {
    // these are all actions in reducers
    newTodo: (state, { type, payload }) => {
      state.allTodo = [...state.allTodo, payload];
      // or you can do => state.allTodo.push(payload)
      state.date = myTime;
    },
    delTodo: (state, { type, payload }) => {
      state.allTodo = state.allTodo.filter((t) => t !== payload);
    },
  },
});

export const { newTodo, delTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
