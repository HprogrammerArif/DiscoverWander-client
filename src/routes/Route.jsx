import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddTourSpot from "../pages/AddTourSpot/AddTourSpot";
import UpdateTourSpot from "../pages/UpdateTourSpot/UpdateTourSpot";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TourDetails from "../pages/TourDetails/TourDetails";
import PrivateRoute from "./PrivateRoute";
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";
import NotFound from "../pages/Error/NotFound";
import MyList from "../pages/MyList/MyList";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/allTourSpot",
        element: <AllTouristSpots></AllTouristSpots>,
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/touristSpot"),
      },
      {
        path: "/tourSpot/:id",
        element: (
          <PrivateRoute>
            <TourDetails></TourDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristSpot/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/addTourSpot",
        element: (
          <PrivateRoute>
            <AddTourSpot></AddTourSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTourSpot",
        element: <UpdateTourSpot></UpdateTourSpot>,
      },
    ],
  },
]);

export default router;
