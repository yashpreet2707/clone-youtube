import React from 'react'

const CommentCard = ({data}) => {

  console.log(data)

  const {authorDisplayName, authorProfileImageUrl, likeCount, textDisplay} = data?.snippet ;


  console.log(authorDisplayName)
  console.log(authorProfileImageUrl)
  console.log(likeCount)
  console.log(textDisplay)
  return (
    <div className='bg-orange-400 p-2 flex'>
      <img className='rounded-full' src={authorProfileImageUrl} alt="pfp-user"/>
      <div className='ml-2 bg-blue-200 w-full'>
          <span className='text-base font-bold'>{authorDisplayName}</span>
          <p className='text-sm'>{textDisplay}</p>
      </div>
    </div>
  )
}

export default CommentCard