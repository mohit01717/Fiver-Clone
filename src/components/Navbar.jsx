import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const [show, setshow] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setactive(true) : setactive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Mohit Gagneja",
    isSeller: true,
  };
  console.log(show);
  return (
    <div
      className={
        "flex flex-col place-items-center justify-center transition duration-150 ease-in-out sticky top-0  z-10"
      }
      style={{
        backgroundColor: active || pathname !== "/" ? "white" : "green",
        color: active || pathname !== "/" ? "black" : "white",
      }}
    >
      <div className=" flex justify-around place-items-center w-screen py-5 px-0  ease-in-out ">
        <div className=" text-4xl font-bold ">
          <Link to={"/"}>
            <span className="text">fiverr</span>
          </Link>
          <span className=" text-green-800">.</span>
        </div>
        <div className=" xl:flex place-items-center text-[17px] gap-6 hidden  ">
          <span>Fiver Pro</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          <Link to={"/login"}>Sign in</Link>
          <Link to={"/register"}>Register</Link>
          {!currentUser && (
            <button className=" py-2 px-5 border rounded-md  hover:bg-green-900">
              Join
            </button>
          )}
          {currentUser && (
            <div
              className="flex place-items-center gap-3 cursor-pointer relative "
              onClick={() => setshow(!show)}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt=""
                className=" h-8 w-8 object-contain"
              />
              <span>{currentUser?.username}</span>
              {show && (
                <div className=" absolute top-10 right-50 p-5 bg-white border  text-black flex flex-col w-40">
                  {currentUser?.isSeller && (
                    <>
                      <Link
                        className=" text-gray-400  hover:text-gray-600 font-semibold"
                        to={"/mygigs"}
                      >
                        Gigs
                      </Link>
                      <Link
                        className=" text-gray-400 hover:text-gray-600 font-semibold"
                        to={"/add"}
                      >
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link
                    className=" text-gray-400 hover:text-gray-600  font-semibold"
                    to={"/orders"}
                  >
                    Orders
                  </Link>
                  <Link
                    className=" text-gray-400  hover:text-gray-600 font-semibold"
                    to={"/messages"}
                  >
                    Messages
                  </Link>
                  <Link
                    className=" text-gray-400 hover:text-gray-600 font-semibold"
                    to={"/orders"}
                  >
                    Orders
                  </Link>
                  <Link
                    className=" text-gray-400 hover:text-gray-600  font-semibold"
                    to={"/"}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr className=" w-screen h-0 border border-gray-300 " />
          <div className=" w-[1400px] py-3 flex justify-between text-gray-500 font-light   ">
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform "
              to="/"
            >
              Graphics & Design
            </Link>
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform"
              to="/"
            >
              Video & Animation
            </Link>
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform"
              to="/"
            >
              Writing & Translation
            </Link>
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform"
              to={"/"}
            >
              AI Services
            </Link>
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform"
              to={"/"}
            >
              Digital Marketing
            </Link>
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform"
              to={"/"}
            >
              Music & Audio
            </Link>
            <Link
              className=" text-gray-400 font-serif hover:text-[20px] hover:text-gray-500 transition-transform"
              to={"/"}
            >
              Programming & Tech
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
