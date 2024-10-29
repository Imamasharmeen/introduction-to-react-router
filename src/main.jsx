import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home.jsx';
import Contact from './assets/components/Contact.jsx';
import About from './assets/components/About.jsx';
import Users from './assets/components/Users.jsx';

const router = createBrowserRouter([
 
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
    ]

  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
