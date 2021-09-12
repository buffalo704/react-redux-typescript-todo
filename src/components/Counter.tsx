import React, { useState } from "react";

function Counter(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const onIncrement = (): void => {
    setCounter(counter + 1);
  };

  const onDecrement = (): void => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      {counter}
    </div>
  );
}

export default Counter;
