import React from "react";
import { login, logout } from "./Actions/isLogged";
import { increment, decrement } from "./Actions/counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="App">
      {isLogged === true ? (
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(logout())}>LOGOUT</button>
        </div>
      ) : (
        <div>
          <h1>Signin to see your Redux Counter.</h1>
          <button onClick={() => dispatch(login())}>LOGIN</button>
        </div>
      )}
    </div>
  );
}

export default App;
