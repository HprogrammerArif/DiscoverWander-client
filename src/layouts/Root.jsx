import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="font-poppins container mx-auto justify-center items-center">
      <Navbar></Navbar>
      <div className="min-h-[450px] ">
      <Outlet></Outlet>
    </div>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;