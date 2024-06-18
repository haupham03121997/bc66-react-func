import React, { useState } from 'react';
import Child from './Child';

export default function DemoUseState() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('Hello Cybersoft!');
  const [user , setUser] = useState({ username: "" , age : ""});

  const handleInCrease = () => {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      DemoUseState
      <hr />
      <h4>Count: {count}</h4>
      <button className="bg-green-600 rounded p-3 text-white" onClick={handleInCrease}>
        Increase
      </button>
      <hr />
      <Child
        message={message}
        onChangeMessage={(msg) => setMessage(msg)}
      />
    </div>
  );
}
