import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = ["All", "< 5min", "Music", "Mixes", "Source", "Deadpool", "News", "Cloud", "Trailer", "Live", "Indian", "Thoughts", "Strategies", "Startup", "Movies", "New to you", "Watched", "Gadgets", "Products", "Recently Uploaded"]

  return (
    <div className='mt-3 p-2 w-full flex gap-x-2 overflow-x-scroll scrollbar-none'>
      {List.map( (item,id) => {
        return <Button key={id} name={item} />
      })}
    </div>
  )
}

export default ButtonList