import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import PageReload from "./components/Pages/PageReload";
import ListedBooks from "./components/Pages/ListedBooks";
import Homepage from "./components/Pages/Home/Homepage";
import SingleBook from "./components/Pages/SingleBook";
import ErrorPage from "./components/Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        errorElement: <ErrorPage />,
        loader: () => fetch("./Api.json"),
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/pageread",
        element: <PageReload></PageReload>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/book/:bookId",
        element: <SingleBook></SingleBook>,
        errorElement: <ErrorPage />,
        loader: () => fetch(`./Api.json`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
