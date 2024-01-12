import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Route, RouterProvider, createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
/*routerProvider*/
const router = createRoutesFromElements(
  createRoutesFromElements(
    <Route path="/" element={<App />} />
  )
)
/*create root*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
