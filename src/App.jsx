import './App.css';
import useRouteElement from './routes/useRouteElement';

function App() {
  const routesElement = useRouteElement();
  return (
    <>
      {routesElement}
      {/* HomePage , AboutPage , ServicePage...*/}
    </>
  );
}

export default App;
