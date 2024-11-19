import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getStoredCartList, getStoredWishList } from "../utilities";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
    </>
  );
  const homeUrl = useLocation().pathname;
  const cartList = getStoredCartList();
  const wishList = getStoredWishList();
  return (
    <div>
      <div
        className={`navbar w-[95%] rounded-t-3xl p-4 mx-auto mt-7 relative z-50 ${
          homeUrl === "/"
            ? "bg-[#9538E2] text-white"
            : "bg-base-100 text-[#9538E2]"
        }`}
      >
        <div className="navbar-start w-[30%]">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            GadgetHeaven
          </Link>
        </div>
        <div className="navbar-center w-[33%] hidden lg:flex justify-center pl-8 ">
          <ul className="menu menu-horizontal gap-12">{links}</ul>
        </div>
        <div className="navbar-end w-[33%] flex gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartList.length}
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {wishList.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
