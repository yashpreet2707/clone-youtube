import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
    const {snippet, statistics, id} = info ;
    const { thumbnails, title, channelTitle} = snippet ;
  return (
    <div className="w-1/5 p-2">
      <Link to={"/watch?v="+ id }>
      <img className="rounded-lg cursor-pointer" alt="thumbnail-alt" src={thumbnails.medium.url} />
      </Link>
      <h4 className="font-bold py-2 text-lg">{title}</h4>
      <h5 className="pb-1 font-semibold">{channelTitle}</h5>
      <h5>{statistics.viewCount} views </h5>
    </div>
  );
};

export default VideoCard;