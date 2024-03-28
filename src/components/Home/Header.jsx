import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listedbook">Listed Books</NavLink>
            </li>
            <li>
              <NavLink to="/pageread">Pages to Read</NavLink>
            </li>
            <li>
              <NavLink to="/author">Author</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          href="#"
          className=" text-xl text-[#131313] font-bold hover:bg-[white] hover:border-[#23BE0A] hover:border-[1px] p-2 rounded-xl"
        >
          Book Vibe
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/listedbook">Listed Books</NavLink>
          </li>
          <li>
            <NavLink to="/pageread">Pages to Read</NavLink>
          </li>
          <li>
            <NavLink to="/author">Author</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-1">
        <div>
          <a className="btn bg-[#23BE0A] text-white text-base font-semibold hover:text-black">
            Sign In{" "}
          </a>
        </div>
        <div className="hidden lg:block">
          <a className="btn bg-[#59C6D2] text-white text-base font-semibold hover:text-black">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
