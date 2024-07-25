import React from "react";

const VideoCard = ({ info }) => {
    const {snippet, statistics} = info ;
    const { thumbnails, title, channelTitle} = snippet ;
  return (
    <div className="w-1/4 p-2">
      <img className="rounded-lg cursor-pointer" alt="thumbnail-alt" src={thumbnails.medium.url} />
      <h4 className="font-bold py-2 text-lg">{title}</h4>
      <h5 className="pb-1 font-semibold">{channelTitle}</h5>
      <h5>{statistics.viewCount} views </h5>
    </div>
  );
};

export default VideoCard;
