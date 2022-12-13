import { createBrowserRouter } from "react-router-dom";
import AboutHome from "../Components/AboutHome/AboutHome";
import Main from "../Layout/Main/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Project1 from "../Pages/Project1/Project1";
import Project2 from "../Pages/Project2/Project2";
import Project3 from "../Pages/Project3/Project3";


const router = createBrowserRouter([
    {
      path : '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/about',
            element: <AboutHome></AboutHome>
        },
        {
            path: '/project1',
            element: <Project1></Project1>
        },
        {
            path: '/project2',
            element: <Project2></Project2>
        },
        {
            path: '/project3',
            element: <Project3></Project3>
        },
      ]
    }
  ]);

  export default router;