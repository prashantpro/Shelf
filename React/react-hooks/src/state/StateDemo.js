import React, { useState } from "react";

//used in useState
const initialCount = () => {
  console.log("init count run");
  return 4;
};

const StateDemo = () => {
  // React Hook names must start with the word "use"
  // Hooks can only be called at top-level of functional component or within custom hooks
  // useState - anytime state changes re-render UI

  // const arr = useState(0); // returns an array

  // Hooks have to run in the same order
  // Hooks cannot be nested in loops, if statement or functions
  // const tryHookWithinFun = () => {
  //   const [test, setTest] = useState("");
  // };

  //destructuring
  // runs everytime the component renders so expensive
  const [count, setCount] = useState(0); // set initial state (optional)
  const [state, setState] = useState({ count: 0, theme: "blue" }); // use object inside state
  const [text, setText] = useState("");

  // initial value passed gets executed i.e. it's expensive operation as it gets called on each render
  useState(initialCount());

  //if init state is expensive use callback which runs only once
  useState(() => {
    initialCount();
  });

  const increment = () => {
    // this doesn't increment count 3 times
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
  };

  // when using object state change, use spread operator for prev state
  const changeState = () => {
    setState((prevState) => {
      // This overwrites state i.e. it's not merge,so theme gets removed
      // return { count: prevState.count + 1 };
      // update old values as well
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  const textChanged = (event) => {
    //state update wil re-render
    setText(event.target.value);
  };

  return (
    <div>
      <input placeholder="Enter name" onChange={textChanged}></input>
      <div>Text is: {text}</div>
      <div>
        <button onClick={() => increment()}> + </button>
        <span>{count}</span>
        <button onClick={() => setCount((prev) => prev - 1)}> - </button>
      </div>
      <div>
        <div>
          Object State count: {state.count}
          <div style={{ color: state.theme }}>{state.theme}</div>
          <button onClick={() => changeState()}>Change State</button>
        </div>
      </div>
    </div>
  );
};

export default StateDemo;
