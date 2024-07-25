import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = ["All", "< 5min", "Music", "Mixes", "Source", "Deadpool", "News", "Cloud", "Trailer", "Live", "Indian", "Thoughts", "Strategies", "Startup", "Movies", "New to you", "Watched", "Gadgets", "Products", "Recently Uploaded"]
  return (
    <div className='flex flex-row gap-x-4 overflow-hidden px-2 py-4'>
      {List.map( (item,id) => {
        return <Button key={id} name={item} />
      })}
    </div>
  )
}

export default ButtonList