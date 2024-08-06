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
import ProjectPage from './pages/Projects/Projects';

import Services from './pages/Services/Services.page';
import About from './pages/About/About.page';
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

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
            path:"/projects",
            element:<ProjectPage/>
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
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
