import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {

  const dispatch = useDispatch() ;

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col items-center ">
      <div className="flex items-center justify-evenly">
        <i class="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => toggleMenuHandler()}></i>
        <a href="/">
        <img
          className="h-16"
          alt="youtube-logo"
          src="https://imgs.search.brave.com/FlI4K4Ec8D5R1MBIyJyICQnBQl0pFUiIPGwC2Ndf-vQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VF/eGlhdGxBbUhxMmkx/TlYyZTJDNjFHSW1F/Y2dKc09tMVFKcDlR/UWJPWGJoNDFzMS0y/ZGZrU0Z4TTd6UkRw/Y2tXU0gxNlVLOElL/Mk9zU1BXNGxtWk1z/QnE4OHFFQkhGN0xF/MFhhU1dlclBKZEVj/VlZXVVNvN0FOXzE0/a2xsS1pxQWMzd2Zn/NWw"
        />
        </a>
      </div>

      <div className="col-span-10 flex items-center justify-center">
        <input className="p-2 pl-5 border border-black rounded-l-full w-1/2 focus:outline-none" type="text" placeholder="Search" />
        <button className="border border-black border-l-0 p-2 px-3 rounded-r-full bg-gray-100">
        <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
        <i class="fa-solid fa-microphone text-2xl mx-4 p-2 px-3 border border-black rounded-full bg-gray-100"></i>
      </div>

      <div className="flex col-span-1 justify-evenly">
        <i class="fa-regular fa-bell fa-2x cursor-pointer"></i>
        <i class="fa-solid fa-user fa-2x cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Head;
