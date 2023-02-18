import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assest/logo.png'

const Header = () => {
  const menuItems = (
    <>
      <li className="font-semibold hover:text-[#007da9] transition duration-200 cursor-pointer ">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold hover:text-[#007da9] transition duration-200 cursor-pointer ">
        <Link to="/about">About </Link>
      </li>
      <li className="font-semibold hover:text-[#007da9] transition duration-200 cursor-pointer ">
        <Link to="/">Contact</Link>
      </li>
      <li className="font-semibold hover:text-[#007da9] transition duration-200 cursor-pointer ">
        <Link to="/">Find Job</Link>
      </li>
      <li className="font-semibold hover:text-[#007da9] transition duration-200 cursor-pointer ">
        <Link to="/">Post Job</Link>
      </li>
    </>
  )

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        {/*mobile device  */}
        <div className="navbar-start">
          <div className="dropdown mt-5">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <Link to="/">
            <img className="w-36" src={logo} alt="" />
          </Link>
        </div>

        {/* leptop device */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <li className="font-semibold btn bg-[#564dc0] border-none mx-2 btn-sm">
            <Link to="/signIn">Login</Link>
          </li>
          <li className="font-semibold btn bg-[#564dc0] border-none btn-sm mx-2">
            <Link to="/signUp">SignUp</Link>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Header
