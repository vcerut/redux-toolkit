import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
  double: boolean;
};

const initialState: CounterState = {
  counter: 0,
  double: false,
};

//definizione della slice di Redux
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      if (state.double == false) {
        //incremento di valore
        state.counter += 1; //state.counter = state.counter + 1
      } else {
        //raddoppia
        state.counter = state.counter * 2;
      }
    },
    decrement: (state) => {
      if (state.double == false) {
        //decremento di valore
        state.counter -= 1; //state.counter = state.counter - 1
      } else {
        //dimezza
        state.counter = state.counter / 2;
      }
    },
    reset: (state) => {
      //reset del valore
      state.counter = 0;
    },
    doubleToggle: (state) => {
      if (state.counter != 0) {
        state.double = !state.double;
      }
    },
  },
});

//estraggo le azioni della slice
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
