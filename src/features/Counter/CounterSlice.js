import { createSlice } from '@reduxjs/toolkit';

// Create a new slice with name, initialState with primary value, reducers.
export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    msg: '',
  },
  reducers: {
    increment: (state, { type, payload }) => {
      state.counter = state.counter + 1;
      state.msg = `im Increasing ${state.counter}`;
    },
    decrement: (state, { type, payload }) => {
      state.counter = state.counter - 9;
      state.msg = `im decreasing ${state.counter}`;
    },
    reset: (state, { type, payload }) => {
      state.counter = 0;
      state.msg = `im ${state.counter}`;
    },
    ot: (state, { type, payload }) => {
      state.counter = payload;
      state.msg = `im ${state.counter}`;
    },
  },
});

// Now, export slice with reducers
export default CounterSlice.reducer;

// export actions from slice
export const { increment, decrement, reset, ot } = CounterSlice.actions;
