import { createSlice } from '@reduxjs/toolkit';

interface InitialState{
  toggle:boolean
}

const initialState:InitialState = {
  toggle: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onBreak: (state) => {
      state.toggle = !state.toggle
    },
  },
});

export const {onBreak} = counterSlice.actions;
export default counterSlice.reducer