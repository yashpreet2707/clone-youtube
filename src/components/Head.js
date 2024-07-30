import React , {useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import {cacheResults} from "../utils/searchSlice"
import { Bell, CircleUserRound, Menu, Mic, Search, Video } from "lucide-react";

const Head = () => {

  const [SearchQuery , setSearchQuery] = useState("") ;
  const [Suggestions, setSuggestions] = useState([]) ;

  const [ShowSuggestions, setShowSuggestions] = useState(false) ;


  const searchCache = useSelector( (store) => store.search)
  const dispatch = useDispatch() ;

  useEffect( ()=>{
    // make an api call after each key press
    // but if the difference between two api calls is <200ms
    // we will decline that api call.
    const timer = setTimeout( ()=>{
      if (searchCache[SearchQuery]) {
        setSuggestions(searchCache[SearchQuery])
      } else {
        getSearchSuggestions()  
      }
    }, 200)

    return () => {
      clearTimeout(timer)
    }

  }, [SearchQuery])

  const getSearchSuggestions = async () => {
    console.log("API Call - " + SearchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery)

    const json = await data.json() ;

    setSuggestions(json[1])
    dispatch(cacheResults({
      [SearchQuery]: json[1],
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid grid-flow-col items-center border-b border-black">
      <div className="flex items-center justify-evenly">
        <div className="cursor-pointer" onClick={()=> toggleMenuHandler()}><Menu /></div>
        <a href="/">
          <img
            className="h-14"
            alt="youtube-logo"
            src="https://imgs.search.brave.com/FlI4K4Ec8D5R1MBIyJyICQnBQl0pFUiIPGwC2Ndf-vQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VF/eGlhdGxBbUhxMmkx/TlYyZTJDNjFHSW1F/Y2dKc09tMVFKcDlR/UWJPWGJoNDFzMS0y/ZGZrU0Z4TTd6UkRw/Y2tXU0gxNlVLOElL/Mk9zU1BXNGxtWk1z/QnE4OHFFQkhGN0xF/MFhhU1dlclBKZEVj/VlZXVVNvN0FOXzE0/a2xsS1pxQWMzd2Zn/NWw"
          />
        </a>
      </div>

      <div className="col-span-10">
      <div className="text-center flex justify-center">
        <input
          className="px-2 py-1 pl-5 border border-gray-400 rounded-l-full w-5/12 focus:outline-none"
          type="text"
          placeholder="Search"
          value={SearchQuery}
          onChange={(e)=>{setSearchQuery(e.target.value)}}
          onFocus={()=> setShowSuggestions(true)}
          onBlur={()=> setShowSuggestions(false)}
        />
        {(SearchQuery) && <i class="fa-solid fa-x text-2xl absolute mt-3 -ml-[25px] cursor-pointer" onClick={()=> {setSearchQuery("")}}></i>}
        <button className="border border-gray-400 border-l-0 p-2 px-5 rounded-r-full bg-gray-50">
          <Search />
        </button>
        <div className="mx-4 p-2 border border-black rounded-full bg-gray-50 cursor-pointer">
        <Mic />
        </div>
      </div>

      {ShowSuggestions && <div className="w-2/5 ml-80 p-4 pl-0 pr-0 rounded-xl absolute bg-white  shadow-xl border border-gray-300">
        <ul>
          {Suggestions.map( (item,id) => {
            return <li className="p-1 pl-4 flex justify-start align-center gap-x-2 font-bold hover:bg-gray-100" key={id}>{item}</li>
          })}
        </ul>
        <p className="text-right text-xs italic text-gray-800 mr-2">Report Search Predictions</p>
      </div>}

      </div>
      
      <div className="flex col-span-1 justify-evenly">
        <div className="cursor-pointer"><Video /></div>
        <div className="cursor-pointer"><Bell /></div>
        <div className="cursor-pointer"><CircleUserRound /></div>
      </div>
    </div>
  );
};

export default Head;
