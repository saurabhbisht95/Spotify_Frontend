import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

export const Sidbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col text-white gap-2 hidden lg:flex '>
        <div className=' bg-[#121212] h-[15%] rounded flex flex-col justify-around '>
            <div onClick={()=>{navigate('/')}} className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.home_icon} className='w-6' alt="" />
            <p className='font-bold'>Home</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.search_icon} className='w-6' alt="" />
            <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                <img src={assets.stack_icon} className='w-8' alt="" />
                <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3 '>
                  <img className='w-5' src={assets.arrow_icon} alt="" />
                  <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex-col item-start justify-start gap-1 pl-4'>
              <h1>Creat your first palylist </h1>
              <p className='font-light'>it's easy we will help you </p>
              <button className='px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-4 '>Creat playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex-col item-start justify-start gap-1 pl-4'>
              <h1>Let's find some podcasts to follow </h1>
              <p className='font-light'>We'll keep you update on new episodes </p>
              <button className='px-4 py-1.5 bg-white text-[15px] rounded-full text-black mt-4 '>Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}
