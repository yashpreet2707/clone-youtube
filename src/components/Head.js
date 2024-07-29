import React , {useState, useEffect }from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Search, X } from "lucide-react";

const Head = () => {

  const [SearchQuery , setSearchQuery] = useState("") ;
  const [Suggestions, setSuggestions] = useState([]) ;

  useEffect( ()=>{
    // make an api call after each key press
    // but if the difference between two api calls is <200ms
    // we will decline that api call.

    const timer = setTimeout( ()=>{getSearchSuggestions()}, 200)

    return () => {
      clearTimeout(timer)
    }

  }, [SearchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery)

    const json = await data.json() ;

    setSuggestions(json[1])
  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid grid-flow-col items-center ">
      <div className="flex items-center justify-evenly">
        <i
          class="fa-solid fa-bars text-2xl cursor-pointer"
          onClick={() => toggleMenuHandler()}
        ></i>
        <a href="/">
          <img
            className="h-16"
            alt="youtube-logo"
            src="https://imgs.search.brave.com/FlI4K4Ec8D5R1MBIyJyICQnBQl0pFUiIPGwC2Ndf-vQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VF/eGlhdGxBbUhxMmkx/TlYyZTJDNjFHSW1F/Y2dKc09tMVFKcDlR/UWJPWGJoNDFzMS0y/ZGZrU0Z4TTd6UkRw/Y2tXU0gxNlVLOElL/Mk9zU1BXNGxtWk1z/QnE4OHFFQkhGN0xF/MFhhU1dlclBKZEVj/VlZXVVNvN0FOXzE0/a2xsS1pxQWMzd2Zn/NWw"
          />
        </a>
      </div>

      <div className="col-span-10">
      <div className="text-center">
        <input
          className="p-2 pl-5 border border-black rounded-l-full w-1/2 focus:outline-none"
          type="text"
          placeholder="Search"
          value={SearchQuery}
          onChange={(e)=>{setSearchQuery(e.target.value)}}
        />
        {(SearchQuery) && <i class="fa-solid fa-x text-2xl absolute mt-3 -ml-[25px] cursor-pointer" onClick={()=> {setSearchQuery("")}}></i>}
        <button className="border border-black border-l-0 p-2 px-3 rounded-r-full bg-gray-100">
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
        <i class="fa-solid fa-microphone text-2xl mx-4 p-2 px-3 border border-black rounded-full bg-gray-100"></i>
      </div>

      {SearchQuery && <div className="w-2/5 ml-80 p-4 pl-0 pr-0 rounded-xl fixed bg-white  shadow-xl border border-gray-300">
        <ul>
          {Suggestions.map( (item,id) => {
            return <li className="p-1 pl-4 flex justify-start align-center gap-x-2 font-bold cursor-pointer hover:bg-gray-100" index={id}>{item}</li>
          })}
        </ul>
      </div>}

      </div>
      
      <div className="flex col-span-1 justify-evenly">
        <i class="fa-regular fa-bell fa-2x cursor-pointer"></i>
        <i class="fa-solid fa-user fa-2x cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Head;
