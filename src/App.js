import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ConfirmedBooking from "./components/ConfirmedBooking";
import About from "./pages/About";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
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
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "booking",
          element: <BookingPage />,
        },
        {
          path: "success",
          element: <ConfirmedBooking />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}
