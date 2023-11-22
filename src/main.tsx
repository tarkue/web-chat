import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './Components/Screens/SignIn';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'normalize.css';
import './styles/main.css';
import Main from './Components/Screens/Main';


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Main />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
