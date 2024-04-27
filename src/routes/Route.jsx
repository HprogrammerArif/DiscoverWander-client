import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddTourSpot from "../pages/AddTourSpot/AddTourSpot";
import UpdateTourSpot from "../pages/UpdateTourSpot/UpdateTourSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/touristSpot')
      },
      {
          path: '/',
          
      },
      {
        path: '/addTourSpot',
        element: <AddTourSpot></AddTourSpot>
      },
      {
        path: '/updateTourSpot',
        element: <UpdateTourSpot></UpdateTourSpot>
      }
    ]
  },
]);

export default router;