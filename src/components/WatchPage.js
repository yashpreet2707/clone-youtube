import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_DETAILS, YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [Recommendations, setRecommendations] = useState([]) ;

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        dispatch(closeMenu());

        const response = await fetch(`${VIDEO_DETAILS}${searchParams.get('v')}`);
        const recommendationResult = await fetch(YOUTUBE_VIDEO_API+"20")

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const recommendationData = await recommendationResult.json() ;

        setVideo(data);
        // console.log(recommendationData.items)
        setRecommendations(recommendationData.items)
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
    
    <div className="w-full flex">

      <div className="w-9/12">
        <iframe
          className="rounded-lg m-auto mt-4"
          width="1000"
          height="580"
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

      <div className="w-3/12">

        {Recommendations.map( (item) =>{
          {console.log(item)}
          return (
            <div className="flex items-center w-full p-2">
              <div className="h-full w-full">
                <Link to={"/watch?v="+ item.id }>
                <img className="h-[100px] rounded-lg" src={item.snippet.thumbnails.medium.url} alt="recommendation-alt"></img>
                </Link>
              </div>
              <div className="ml-1">
                <h2 className="text-[12px] font-semibold">{item.snippet.title}</h2>
                <h3 className="text-xs text-gray-600 mt-1">{item.snippet.channelTitle}</h3>
                <h3 className="text-xs text-gray-600 mt-1">{item.statistics.viewCount}</h3>
              </div>
          </div>
          )
        })}

        {/* <div className="flex border border-black w-full p-2 mb-2">
          <img className="h-[100px] w-[155px] rounded-lg" src={Recommendations.items[1].snippet.thumbnails.medium.url} alt="recommendation-alt"></img>
          <div className="ml-1">
            <h2 className="text-[12px] font-semibold">{Recommendations.items[1].snippet.title}</h2>
            <h3 className="text-xs text-gray-600 mt-1">{Recommendations.items[1].snippet.channelTitle}</h3>
            <h3 className="text-xs text-gray-600 mt-1">{Recommendations.items[1].statistics.viewCount}</h3>
          </div>
        </div> */}

      </div>
        
    </div>
    )
  
};

export default WatchPage;
