import React, { useState, useEffect } from 'react'
import {YOUTUBE_VIDEO_API} from "../utils/constants"
import VideoCard, {AdVideoCard} from './VideoCard';

const VideoContainer = () => {

  const [Videos, setVideos] = useState([]) ;

  useEffect( ()=>{
    getVideos() ;
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API+"50")

    const json = await data.json() ;

    setVideos(json.items)
  }

  return (
    <div className='px-2 py-5 flex flex-wrap'>
      {/* {<AdVideoCard info={Videos[0]} />} */}
      {Videos.map( (video) => {
        return (
            <VideoCard key={video.id} info={video} />
        )
      } )}
    </div>
  )
}

export default VideoContainer