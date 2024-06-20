import React, { useEffect, useState } from 'react';

const Child = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    let id = setInterval(() => {
      console.log('Effect Child');
    }, 1000);

    return () => {
      // Chạy trước khi component mất đi khỏi DOM
      console.log('Hấp hối....');
      clearInterval(id);
    };
  }, []);

  return (
    <div className="mt-10">
      Child
      <p className="my-4">Number child :{number}</p>
    </div>
  );
};

export default Child;
