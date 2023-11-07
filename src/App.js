import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Reservations from "./pages/Reservation";
import Root from "./pages/Root";

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "menu",
          element: <Menu />,
        },
        {
          path: "order-online",
          element: <Order />,
        },
        {
          path: "reservations",
          element: <Reservations />,
        },
        // {
        //   path: "login",
        //   element: <Login />,
        // },
        {
          path: "login",
          element: <BookingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}
