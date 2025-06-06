import { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [open, setOpen] = useState(false);
  const links = (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5">
      <NavLink className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300" to="/">Home</NavLink>
      <NavLink className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300" to="/allSports">All Sports Equipment</NavLink>
      <NavLink className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300" to="/addEquipment">Add Equipment</NavLink>
      <NavLink className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300" to="/allList">My Equipment List</NavLink>
    </div>
  );

  const links1 =(
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 font-semibold">
        <NavLink className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300" to="/">Home</NavLink>
        <NavLink className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300" to="/allSports">All Sports Equipment</NavLink>
    </div>
  )

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar z-50 fixed top-0 left-0 w-full py-3 px-4 bg-black backdrop-blur-lg dark:text-[#273248] dark:bg-slate-300 text-white">
      <div className="navbar-start">
      <div className="relative lg:hidden">
  <button
    onClick={() => setOpen(!open)}
    className="btn btn-sm !px-1.5 text-xl"
  >
    {open ? <IoCloseSharp /> : <IoMdMenu />}
  </button>

  {open && (
    <ul className="absolute top-12 left-0 w-56 bg-transparent border border-white text-white font-semibold rounded-lg shadow-lg z-50 p-5 space-y-2 backdrop-blur-md">
    {links}
  </ul>
  
  )}
</div>

        <Link to="/" className="font-bold ml-2 text-2xl">
          Pro Gear
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        {
          user ? <ul className="menu menu-horizontal px-1">{links}</ul> : <ul className="menu menu-horizontal px-1">{links1}</ul>
        }
      </div>

      <div className="navbar-end flex items-center justify-center gap-4">
        {user ? (
          <div className="flex flex-col items-center">
            <img
             data-tooltip-id="user-tooltip"
             data-tooltip-content={user?.displayName || "No username available"}
              className="w-10 h-10 rounded-full"
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt=""
            />
            <ReactTooltip id="user-tooltip" place="left" type="dark" effect="float" />
          </div>
        ) : null}

        {user && user?.email ? (
          <button onClick={logOut} className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300">
            Log-Out
          </button>
        ) : (
          <Link to="/auth/login" className="bg-transparent hover:bg-black text-white font-semibold py-2 px-4 border border-white rounded transition duration-300">
            Login
          </Link>
        )}

        {/* Theme toggle button */}
        <label className="swap swap-rotate ml-3">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light"}
            className="theme-controller"
          />
          <svg
            className="swap-on h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
