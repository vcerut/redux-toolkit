// import { useState } from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { counterActions } from "./redux/slices/counter.slice";

function App() {
  // const [count, setCount] = useState(0);
  const count = useAppSelector((state) => state.counter.counter);
  const dispatch = useAppDispatch();
  const doubleButton = useAppSelector((state) => state.counter.double);

  return (
    <>
      <div className="card">
        <h1>Count is: {count}</h1>
        <button onClick={() => dispatch(counterActions.increment())}>+1</button>
        <button onClick={() => dispatch(counterActions.decrement())}>-1</button>
        <button
          onClick={() => dispatch(counterActions.doubleToggle())}
          className={doubleButton ? "active" : "inactive"}
          disabled={count == 0}
        >
          DOUBLE
        </button>
        <button onClick={() => dispatch(counterActions.reset())}>RESET</button>
      </div>
    </>
  );
}

export default App;
