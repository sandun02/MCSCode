import React from 'react';
import ReactDOM from 'react-dom/client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './pages/home/home.page.jsx';
import RootLayout from './layouts/root.layout';
import MainLayout from './layouts/main.layout';
import ContactUs from './pages/contact/contact.page';
import SignInPage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';

import Services from './pages/Services/Services.page';
import About from './pages/About/About.page';

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children : [
      
          {
            path:"/",
            element: <HomePage/>
          },
          {
            path:"/services",
            element:<Services/>
          },
          {
            path:"/contact",
            element:<ContactUs/>
          },
          {
            path:"/about",
            element:<About/>
          },

      
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
