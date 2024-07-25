import React from 'react'

const Button = ({name}) => {
  return (
    <button className='px-1 py-2 gap-x-4 rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold text-sm'>{name}</button>
  )
}

export default Button