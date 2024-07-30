import React from 'react'

const Button = ({name}) => {
  return (
    <button className='rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold text-sm'>{name}</button>
  )
}

export default Button