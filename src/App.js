import * as React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Head from "./Components/Head";
import ShowNames from "./Components/ShowNames";
import ShowPage from "./Components/ShowPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <ShowNames />,
      },
      {
        path: "show/:id",
        element: <ShowPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App; // Ensure that you export the App component
