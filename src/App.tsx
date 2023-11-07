// import { useState } from "react";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { counterActions } from "./redux/slices/counter.slice";

function App() {
  // const [count, setCount] = useState(0);
  const count = useAppSelector((state) => state.counter.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(counterActions.increment())}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
