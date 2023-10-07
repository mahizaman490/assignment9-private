import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';

import Register from './components/Register';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [

      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path : '/register',
        element: <Register></Register>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/services',
        element:<Services></Services>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
