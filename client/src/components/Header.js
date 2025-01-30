import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="flex items-center justify-between px-2 md:px-6 bg-gradient-to-b from-slate-900 to-black">
      <div  onClick={toggleHandler} >
     
        <img
          className="w-[10vmax] h-6 mx-2 md:h-10 md:mx-20 my-3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
          alt="netflix-logo"
        />
      
      </div>
      <div>
        {user && (
          <div className="flex items-center">
            <IoIosArrowDropdown size="24px" color="white" />
            <h1 className="md:text-lg font-medium text-white text-sm">
              {user.fullName}
            </h1>
            <div className="ml-4 flex">
              <button
                onClick={logoutHandler}
                className="hidden md:block bg-red-800 text-white px-2 text-xs md:text-lg md:px-4 rounded-md"
              >
                Logout
              </button>
              <button
                onClick={toggleHandler}
                className="hidden md:block bg-red-800 text-white text-xs md:text-lg px-2 md:px-4 py-2 ml-2 rounded-md"
              >
                {toggle ? "Home" : "Search Movie"}
              </button>
              
            </div>
            <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <div
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>

        </button>
          <div
        className={`lg:hidden absolute right-1 z-10 top-10 w-1/2 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
       
        <div className="place-items-center bg-[#ffffff92]  py-2">
              <button
                onClick={toggleHandler}
                className="bg-red-800 block text-white text-md px-3 py-2 rounded-md"
              >
                {toggle ? "Home" : "Search Movie"}
              </button>
              <button
                onClick={logoutHandler}
                className="bg-red-800 block  text-white my-2 px-3 py-2 text-md md:px-4 rounded-md"
              >
                Logout
              </button>
              
            </div>
     
      </div>
        
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
