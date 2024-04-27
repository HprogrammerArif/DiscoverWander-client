import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../../Providers/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContex);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errors = error.message;
        console.log(errors);
      });
  };
  

  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/allTourSpot'>All TourSpot</NavLink>
      </li>
      <li>
        <NavLink to='/addTourSpot'>Add TourSpot</NavLink>
      </li>
      <li>
        <NavLink to='/updateTourSpot'>Update TourSpot</NavLink>
      </li>
      <li>
        <NavLink to='myList'>My List</NavLink>
      </li>
      <li>
        <NavLink to='blogs'>Blogs</NavLink>
      </li>
    </>
  )

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-12 mr-2"
              src="https://i.ibb.co/8gwCyWq/logo-of-wonder.png"
              alt=""
            />
            <span className="font-black text-xl text-purple-600 mt-1">
              Discobver <br />
              Wonder
            </span>
          </div>
        </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
            <>
              <button
                className="btn bg-purple-500 text-gray-100 font-bold mr-6"
                onClick={handleLogOut}
              >
                <a>Logout</a>
              </button>

              <button
                className="dropdown rounded-2xl dropdown-end tooltip-left tooltip "
                data-tip={user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost  btn-circle avatar"
                >
                  <div className="w-15 border-4 border-green-600 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                     src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/userProfile" className="justify-between">
                      View Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </button>
            </>
          ) : (
            <>
              <Link className="mr-5" to="/register">
                <button className="self-center px-4 py-3 font-semibold rounded bg-green-400 text-gray-900">
                  Register
                </button>
              </Link>

              <Link to="/login">
                <button className="self-center px-6 py-3 font-semibold rounded bg-violet-400 text-gray-900">
                  Login
                </button>
              </Link>
            </>
          )}
  </div>
</div>
  );
};

export default Navbar;