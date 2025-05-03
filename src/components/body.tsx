import Browes from "./browes";
import { Login } from "./login";
import { RouterProvider, createBrowserRouter } from "react-router";

function Body() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browses",
      element: <Browes />,
    },
  ]);

  return <RouterProvider router={appRoute} />;
}

export default Body;
