import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import News from "./Components/News.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <News category={"general"} /> },
      { path: "/Science", element: <News category={"science"} /> },
      { path: "/Health", element: <News category={"health"} /> },
      { path: "/Business", element: <News category={"business"} /> },
      { path: "/Technology", element: <News category={"technology"} /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
