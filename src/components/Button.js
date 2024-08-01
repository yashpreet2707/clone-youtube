import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold text-sm whitespace-nowrap'>{name}</button>
  )
}

export default Button