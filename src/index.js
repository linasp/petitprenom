import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { loadNames } from './data';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
  {
    path: "/",
    // errorElement: <ErrorPage />,
    element: <App />,
    loader: loadNames,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();