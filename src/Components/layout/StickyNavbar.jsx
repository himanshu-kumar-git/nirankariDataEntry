/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useFirebase } from "../../Context/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [admin, setAdmin] = useState(false);

  const firebase = useFirebase();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(firebase.isLoggedIn);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    if (firebase.user !== null) {
      if (firebase.user.email === import.meta.env.VITE_ADMIN_EMAIL) {
        setAdmin(true);
      } else {
        setAdmin(false);
      }
    } else {
      setAdmin(false);
    }
  }, [firebase.isLoggedIn, firebase.user]);

  const handleLogin = () => {
    if (firebase.isLoggedIn) {
      firebase.signOutUser();
      localStorage.clear("user");
      navigate("/login");
      setIsLogin(false);
    } else {
      navigate("/login");
    }
  };

  const onclickOnLinks = () => {
    setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={onclickOnLinks}
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={onclickOnLinks}
      >
        <Link to="/entry" className="flex items-center">
          Entry
        </Link>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={onclickOnLinks}
      >
        <Link to="weeklyentry" className="flex items-center">
          Weekly Entry
        </Link>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={onclickOnLinks}
      >
        <Link to="/" className="flex items-center">
          Dashboard
        </Link>
      </Typography>
      {admin ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          onClick={onclickOnLinks}
        >
          <Link to="/" className="flex items-center">
            Admin
          </Link>
        </Typography>
      ) : null}
      {admin ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          onClick={onclickOnLinks}
        >
          <Link to="/" className="flex items-center">
            Weekly Report
          </Link>
        </Typography>
      ) : null}
      {admin ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          onClick={onclickOnLinks}
        >
          <Link to="/monthlyrecord" className="flex items-center">
            Monthly Report
          </Link>
        </Typography>
      ) : null}
      {admin ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          onClick={onclickOnLinks}
        >
          <Link to="/userList" className="flex items-center">
            Show Users
          </Link>
        </Typography>
      ) : null}
      {admin ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          onClick={onclickOnLinks}
        >
          <Link to="/signup" className="flex items-center">
            Add Users
          </Link>
        </Typography>
      ) : null}
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px]  w-[calc(100%+48px)] l fixed top-0 inset-x-0 z-50">
      <Navbar className="sticky top-0 z-10  max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 mt-5">
        <div className="flex items-center justify-between text-blue-gray-900 h-12 ">
          <Typography
            as="a"
            href="#"
            className="mr-10 cursor-pointer py-1.5 px-5 font-medium"
          >
            <h1 className="text-2xl font-bold text-pink-600  px-2 py-1 rounded">
              SNM Entry System
            </h1>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {isLogin ? (
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={handleLogin}
                >
                  <span>Log Out</span>
                </Button>
              ) : (
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={handleLogin}
                >
                  <span>Log In</span>
                </Button>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto mr-7 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="pl-10">
          {navList} {/* Renders the navigation links */}
          <div className="flex items-center gap-x-1">
            {/* Renders either login or logout button based on the user's login status */}
            {isLogin ? (
              <Button
                fullWidth
                variant="text"
                size="sm"
                className=""
                onClick={handleLogin}
              >
                <span>Log Out</span>
              </Button>
            ) : (
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                className=""
                onClick={handleLogin}
              >
                <span>Log In</span>
              </Button>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default StickyNavbar;
