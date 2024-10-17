
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayout from './components/Applayout';
import Home from './components/Home';
import CarCart from './components/CarCart';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },


        {
          path: "/cart",
          element: <CarCart/>,
        }
      ]
    }

  ])
  return (


    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App;
