import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
};

const initialState: CounterState = {
  counter: 0,
};

//definizione della slice di Redux
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      //incremento di valore
      state.counter += 1; //state.counter = state.counter + 1
    },
  },
});

//estraggo le azioni della slice
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
