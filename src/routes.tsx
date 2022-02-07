import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import User from "./pages/User";

const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <User />,
  },
];

export default Routes;
