import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginUserProvider } from "./context/LoginUserContext";

import App from "./App";

import HomePage from "./pages/HomePage";
import BuyPage from "./pages/BuyPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/buy",
        element: <BuyPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoginUserProvider>
      <RouterProvider router={router} />
    </LoginUserProvider>
  </React.StrictMode>
);
