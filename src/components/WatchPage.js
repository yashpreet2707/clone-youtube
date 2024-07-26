import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS } from "../utils/constants";

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  const [Video, setVideo] = useState(null) ;

  useEffect(() => {
    dispatch(closeMenu());

    getVideoDetails() ;
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS + searchParams.get("v")) 
    const json = await data.json() ; 


  setVideo(json) 

  }

  console.log(Video)
  // const {title, channelTitle, description} = Video?.items[0]?.snippet ;
  // const {likeCount , commentCount, viewCount } = Video?.items[0]?.statistics ;


  return (
    <div className="w-full">

      <div className="w-9/12 bg-white">

        <iframe
          className="rounded-lg"
          width="1360"
          height="770"
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        {/* <h1 className="font-bold text-xl py-2">{title}</h1> */}

        <div className="flex justify-between items-center">

          <div className="flex items-center w-3/12">
            <i class="fa-solid fa-user text-2xl border border-black rounded-full p-2 cursor-pointer"></i>
            {/* <span className="font-bold pl-2">{channelTitle}</span> */}
            <button className="p-2 ml-12 border border-black rounded-full text-white bg-black font-bold text-sm">Subscribe</button>
          </div>

          <div className="flex items-center justify-evenly w-6/12">

            <div>
              {/* <button className="p-2 border-r border-black rounded-l-full bg-gray-100 hover:bg-gray-200 font-bold"><i class="fa-solid fa-thumbs-up"></i> {likeCount}</button> */}
              <button className="p-2 rounded-r-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-thumbs-down"></i></button>
            </div>
            
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-share"></i> Share</button>

            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-download"></i> Download</button>

            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-dollar-sign"></i> Thanks</button>

            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-scissors"></i> Clip</button>

            <button className="p-2 px-3 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-ellipsis"></i></button>
          </div>

        </div>

      </div>


    </div>
  )
};

export default WatchPage;
