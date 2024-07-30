import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
    const {snippet, statistics, id} = info ;
    const { thumbnails, title, channelTitle} = snippet ;
  return (
    <div className="w-1/3 my-4">
      <Link to={"/watch?v="+ id }>
        <img className="ml-4 rounded-lg cursor-pointer" alt="thumbnail-alt" src={thumbnails.medium.url} />
      </Link>
      <div className="ml-4">
        <h4 className="font-bold py-2 text-[14px] w-full">{title}</h4>
        <h5 className="pb-1 font-semibold text-sm text-gray-600 w-full">{channelTitle}</h5>
        <h5 className="text-sm text-gray-600 w-full">{statistics.viewCount} views </h5>
      </div>
    </div>
  );
};

// export const AdVideoCard = ({info}) => {
//     return (
//       <div>
//         <VideoCard info={info} />
//         <span>hehe this is somestuff</span>
//       </div>
//     )
// }

export default VideoCard;