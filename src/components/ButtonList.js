import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const List = ["All", "< 5min", "Music", "Mixes", "Source", "Deadpool", "News", "Cloud", "Trailer", "Live", "Indian", "Thoughts", "Strategies", "Startup", "Movies", "New to you", "Watched", "Gadgets", "Products", "Recently Uploaded"]
  return (
    <div className='flex overflow-x-scroll scrollbar-none '>
      {List.map( (element,id) => {
        return <Button key={id} name={element} />
      })}
    </div>
  )
}

export default ButtonList