import { Button } from "antd";
import React, { memo, useEffect } from 'react';

const ExpensiveData = ({ number , user  , onChangeMsg }) => {
  // useEffect(() => {
  //   console.log('Render ExpensiveData');
  // }, []);

  console.log('Render ExpensiveData');

  return (
    <div className="my-5">
      <p className="my-5">Expensive Number: {number}</p>
      <p>FullName: {user.fullName}</p>
      <p>Age: {user.age}</p>
      {[1].map((item) => (
        <div key={item} className="w-[400px] h-[400px] bg-red-500"></div>
      ))}

      <Button onClick={() => onChangeMsg()}>Set Message</Button>
    </div>
  );
};

export default memo(ExpensiveData);
