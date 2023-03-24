import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../redux/store';
import {initialState} from '@/redux/counter/Type/initialState';
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.valueT += 1;
    },
    decrement: state => {
      state.valueT -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.valueT += action.payload;
    },
  },
});
export const {increment, decrement, incrementByAmount} = counterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.valueT;
export default counterSlice.reducer;
