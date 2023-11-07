import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter.slice";

//creo lo store che conterrà i reducer
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

//le cose che andiamo a fare sono vere solo per TypeScript

//espongo i tipi di Redux utilizzando il type infer di TypeScript
export type RootState = ReturnType<typeof store.getState>; //ritorno il tyoe della funzione getState
export type AppDispatch = typeof store.dispatch; //passo la tipizzazione di store.dispatch

//creo poi il file hooks.ts
