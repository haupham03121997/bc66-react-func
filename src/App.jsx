import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoUseState from './hooks/DemoUseState';
import DemoForm from './form/DemoForm';
import DemoRedux from './components/DemoRedux';
import DemoUseEffect from "./hooks/DemoUseEffect";

function App() {
  return (
    <>
      <Header />
      <div className=" my-10 container mx-auto">
        {/* <DemoUseState /> */}
        {/* <DemoForm/> */}
        {/* <DemoRedux /> */}
        <DemoUseEffect />
      </div>
      <Footer />
    </>
  );
}

export default App;
