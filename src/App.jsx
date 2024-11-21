import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Sidebar from './components/header/Sidebar';
import Blog from './components/blogs/Blog';
import Thankyou from './components/Thankyou/Thankyou';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace /> 
    },
    {
      path: "/home",
      element: <><Sidebar /> <Home /></>
    },
    {
      path: "/resume",
      element: <><Sidebar /> <Resume /></>
    },
    {
      path:"/blogs",
      element:<> <Sidebar /> <Blog /></>
    },
    {
      path :"/thankyou",
      element: <>  <Thankyou></Thankyou></>
    }
    , 
    {
      path: "*", 
      element: <Navigate to="/home" replace />
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
