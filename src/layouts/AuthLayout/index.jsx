import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
