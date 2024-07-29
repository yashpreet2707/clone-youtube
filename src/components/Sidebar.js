import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Clapperboard, Clock, Dices, Flame, History, House, Layers2, Lightbulb, ListVideo, MonitorPlay, Music, Newspaper, Podcast, Radio, Shirt, ShoppingBag, Trophy, TvMinimal, Youtube } from 'lucide-react';

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
        <Link to="/"><li className='px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 hover:rounded-lg flex items-center justify-start gap-x-2 '><House /> Home</li></Link>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2 '><Layers2 />Shorts</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2 '><Podcast /> Subscriptions</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <h3 className='font-semibold py-2 px-4 hover:bg-gray-200 hover:rounded-lg '>You &gt;</h3>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><TvMinimal />Your Channel</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><History />History</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><ListVideo /> Playlist</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><MonitorPlay /> Your Videos</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Clock /> Watch Later</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <h3 className='font-semibold py-2 px-4'>Explore</h3>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Flame />Trending</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><ShoppingBag /> Shopping</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Music /> Music</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Clapperboard /> Films</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Radio /> Live</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Dices /> Gaming</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Newspaper /> News</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Trophy /> Sport</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Lightbulb /> Courses</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Shirt /> Fashion & beauty</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Podcast /> Podcasts</li>
        </ul>
  
        <ul className="border-b-2 shadow-b-xl p-2">
          <h3 className='font-semibold py-2 px-4'>More from YouTube</h3>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Youtube /> YouTube Premium</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Youtube /> Youtube Studio</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Youtube /> YouTube Studio</li>
          <li className='px-4 py-2 hover:bg-gray-200 hover:rounded-lg flex items-center justify-start gap-x-2'><Youtube /> Youtube Kids</li>
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