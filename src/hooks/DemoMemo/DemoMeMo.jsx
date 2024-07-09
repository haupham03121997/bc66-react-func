import { Button } from 'antd';
import React, { memo, useState, useMemo, useCallback } from 'react';
import ExpensiveData from './ExpensiveData';

const DemoMeMo = () => {
  const [number, setNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');

  // const user = { fullName: 'Alice', age: number };
  const user = useMemo(() => {
    return { fullName: 'Alice', age: number };
  }, [number]);

  const handleOnChangeMsg = useCallback(() => {
    setMsg('Hello Kitty');
  }, []);

  return (
    <div>
      {number}
      DemoMeMo
      <Button onClick={() => setNumber(number + 1)}>+</Button>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      {msg && <p>Message : {msg}</p>}
      <ExpensiveData number={number} user={user} onChangeMsg={handleOnChangeMsg} />
    </div>
  );
};

export default DemoMeMo;
