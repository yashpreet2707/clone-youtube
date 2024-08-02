import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react'

const CommentCard = ({data}) => {

  // console.log(data)

  const {authorDisplayName, authorProfileImageUrl, likeCount, textOriginal} = data?.snippet ;

  return (
    <div className='p-2 mb-2 flex items-center'>
      <div>
        <img className='rounded-full' src={authorProfileImageUrl} alt="pfp-user"/>  
      </div>
      <div className='ml-2 w-full'>
          <span className='text-sm font-bold'>{authorDisplayName}</span>
          <p className='text-sm my-1'>{textOriginal}</p>
          <div className='flex mt-2'>
            <span className='flex gap-x-2'><ThumbsUp />{likeCount}</span> 
            <span className='mx-4 flex gap-x-4 text-sm font-semibold'><ThumbsDown /> Reply</span>
          </div>
      </div>
    </div>
  )
}

export default CommentCard