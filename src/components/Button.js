import React from 'react'

const Button = ({name}) => {
  return (
    <div className='py-2'>
        <button className='mr-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 font-semibold text-sm'>{name}</button>
    </div>
  )
}

export default Button