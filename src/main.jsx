import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex justify-between p-10">
        Hello world! <CiStar />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
