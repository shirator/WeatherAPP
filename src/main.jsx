import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CityProvider } from "./context/CityContext.jsx";
import { ApiProvider } from "./context/ApiContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <CityProvider>
        <RouterProvider router={router} />
      </CityProvider>
    </ApiProvider>
  </React.StrictMode>
);
