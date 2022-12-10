import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main/Main';
import router from './Routes/Routes';

function App() {
  return (
    <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
