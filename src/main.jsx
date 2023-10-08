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

import Errorpage from './errorPage/Errorpage';
import Event from './components/Event';
import AuthProvider from './providers/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errorpage></Errorpage>,
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
        path:'/events/:id',
        element:<Event></Event>,
        loader:()=>fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
