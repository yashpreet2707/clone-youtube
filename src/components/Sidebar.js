import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)


  return (!isMenuOpen) 
    ? (
      <div className='w-22 h-screen text-sm'>
        <ul className='p-2'>
          <li className='p-6'><Link to="/"><i class="fa-solid fa-house text-2xl"></i></Link></li>
          <li className='p-6'><i class="fa-brands fa-xing text-2xl"></i></li>
          <li className='p-6'><i class="fa-solid fa-box text-2xl"></i></li>
          <li className='p-6'><i class="fa-regular fa-user text-2xl"></i></li>
        </ul>
      </div>
    )
    : (
      <div className='w-2/12 h-screen'>
  
        <ul className="border-b-2 shadow-b-xl p-2">
        <Link to="/"><li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Home</li></Link>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Shorts</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Subscriptions</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <h3 className='font-semibold py-2 px-4 hover:bg-gray-200 hover:rounded-lg'>You &gt;</h3>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Your Channel</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>History</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Playlist</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Your Videos</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Watch Later</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <h3 className='font-semibold py-2 px-4'>Explore</h3>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Trending</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Shopping</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Music</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Films</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Live</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Gaming</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>News</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Sport</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Courses</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Fashion & beauty</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Podcasts</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <h3 className='font-semibold py-2 px-4'>More from YouTube</h3>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>YouTube Premium</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Youtube Studio</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>YouTube Studio</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg'>Youtube Kids</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <li className='p-2 hover:bg-gray-200 hover:rounded-lg'><i class="fa-solid fa-gear px-2"></i>Settings</li>
          <li className='p-2 hover:bg-gray-200 hover:rounded-lg'><i class="fa-regular fa-flag px-2"></i>Report history</li>
          <li className='p-2 hover:bg-gray-200 hover:rounded-lg'><i class="fa-solid fa-question px-2"></i>Help</li>
          <li className='p-2 hover:bg-gray-200 hover:rounded-lg'><i class="fa-solid fa-circle-exclamation px-2"></i>Send feedback</li>
        </ul>
  
        <ul className='flex flex-wrap p-2 text-xs font-semibold'>
          <li className='px-1'>About</li>
          <li className='px-1'>Press</li>
          <li className='px-1'>Copyright</li>
          <li className='px-1'>Contact us</li>
          <li className='px-1'>Creator</li>
          <li className='px-1'>Advertise</li>
          <li className='px-1'>Developers</li>
        </ul>
        <ul className='flex flex-wrap p-2 text-xs font-semibold'>
          <li className='px-1'>Terms</li>
          <li className='px-1'>Privacy</li>
          <li className='px-1'>Policy & Safety</li>
          <li className='px-1'>How Youtube works</li>
          <li className='px-1'>Test new features</li>
        </ul>
  
        <h3 className='text-xs text-gray-400 p-4'>&copy; 2024 Yash Copyright 😉</h3>
      </div>
    )

}

export default Sidebar