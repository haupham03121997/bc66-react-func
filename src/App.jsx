import { useState } from "react";
import './App.css';
import { UserContext } from "./context/UserContext";
import useRouteElement from './routes/useRouteElement';

function App() {
  const routesElement = useRouteElement();

  const [currentUser , setCurrentUser] = useState(()=>{
    return JSON.parse(localStorage.getItem('currentUser')) || null;
  });
  
  return (
    <>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>{routesElement}</UserContext.Provider>

      {/* HomePage , AboutPage , ServicePage...*/}
    </>
  );
}

export default App;
