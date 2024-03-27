import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import PageRead from "./Routes/PageRead";
import ListedBooks from "./Routes/ListedBooks";
import Homepage from "./Routes/Homepage";
import SingleBook from "./Routes/SingleBook";
import ErrorPage from "./components/Error";
import { ToastContainer } from "react-toastify";

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
        loader: () => fetch("/Api.json"),
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        errorElement: <ErrorPage />,
        loader: () => fetch("/Api.json"),
      },
      {
        path: "/pageread",
        element: <PageRead></PageRead>,
        errorElement: <ErrorPage />,
        loader: () => fetch("/Api.json"),
      },
      {
        path: "/book/:bookId",
        element: <SingleBook></SingleBook>,
        errorElement: <ErrorPage />,
        loader: () => fetch("/Api.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
