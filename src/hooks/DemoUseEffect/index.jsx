import React, { useEffect, useState } from 'react';
import Child from './Child';
import PostList from './PostList';

const DemoUseEffect = () => {
  /**
   * Rule của hooks
   * - Chỉ sử dụng hooks trong function component
   * - Đặt ở top level của body function component hoặc custom hooks
   */

  const [count, setCount] = useState(1);
  const [isClick, setIsClick] = useState(false);

  // TH1: có 1 tham số là callback function
  // useEffect(() => {
  //   // Chạy mỗi khi component được render
  //   console.log('Effect');
  // });

  // TH2: có 2 tham số là callback function và dependence - mảng rỗng
  // useEffect(() => {
  //   // Chạy 1 lần duy nhất sau khi component được render
  //   // Thường được dùng để call api
  //   console.log('Effect');
  // }, []);

  // TH3
  useEffect(() => {
    // console.log('Effect');
    if (count < 20) {
      setCount(count * 2);
    }
  }, [count]);

  // TH4
  // useEffect();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      <PostList />
    </div>
  );
};

export default DemoUseEffect;
