import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS } from "../utils/constants";

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        dispatch(closeMenu());
        const response = await fetch(`${VIDEO_DETAILS}${searchParams.get('v')}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVideo(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getVideoDetails();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!video || !video.items || video.items.length === 0) {
    return <div>No video details found.</div>;
  }

  const { title, channelTitle, description } = video.items[0].snippet;
  const { likeCount, commentCount, viewCount } = video.items[0].statistics;


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


        <h1 className="font-bold text-xl py-2">{title}</h1>

        <div className="flex justify-between items-center">

          {/* video details div  */}
          <div className="flex items-center w-4/12">
            <i class="fa-solid fa-user text-2xl border border-black rounded-full p-2 cursor-pointer"></i>
            <span className="font-bold pl-2">{channelTitle}</span>
            <button className="ml-8 p-2 border border-black rounded-full text-white bg-black font-bold text-sm">Subscribe</button>
          </div>

          {/* buttons */}
          <div className="flex items-center justify-evenly w-6/12">

            <div>
              <button className="p-2 border-r border-black rounded-l-full bg-gray-100 hover:bg-gray-200 font-bold"><i class="fa-solid fa-thumbs-up"></i> {likeCount}</button>
              <button className="p-2 rounded-r-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-thumbs-down"></i></button>
            </div>
            
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-share"></i> Share</button>

            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-download"></i> Download</button>

            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-dollar-sign"></i> Thanks</button>

            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-scissors"></i> Clip</button>

            <button className="p-2 px-3 rounded-full bg-gray-100 hover:bg-gray-200"><i class="fa-solid fa-ellipsis"></i></button>
          </div>

        </div>

        {/* description box */}
        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <h3 className="font-bold">{viewCount} views</h3>
          <p>{description}</p>
        </div>

        {/* comment box  */}
        <div className="mt-4">
          <h3 className="font-bold text-xl">{commentCount} Comments</h3>
        </div>

      </div>


    </div>
    )
  
};

export default WatchPage;
