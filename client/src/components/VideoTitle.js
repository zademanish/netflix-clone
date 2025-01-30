import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
    
    return (
        <div className='w-[100%] absolute  text-white md:pt-[18%] px-8 pt-10 md:p-12'>
            {/* desktop view */}
            <div className='hidden md:block mt-32 ml-10'>
            <h1 className='md:text-3xl text-md font-bold'>{title}</h1>
            <p className='md:w-1/3 text-lg opacity-75'>{overview.length > 2000 ? overview.slice(0,200) : overview}</p>
            <div className='flex mt-4 md:mt-8'>
                <button className='flex items-center px- text-md px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                    <CiPlay1 size="24px" />
                    <span className='ml-1'>Play</span>
                </button>
                <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-black rounded-md'>
                    <CiCircleInfo size="24px" />
                   <span className='ml-1'>Watch more</span> 
                </button>
            </div>
            </div>
            {/* for mobile view */}
            <div className='md:hidden '>
            <h1 className='opacity-85 text-md font-bold'>{title}</h1>
            <p className=' text-sm opacity-75'>{overview.length > 100 ? overview.slice(0,100) : overview}</p>
            <div className='flex mt-2'>
                <button className='flex items-center px-3 text-sm  bg-white text-black rounded-md hover:bg-opacity-80'>
                    <CiPlay1 size="18px" />
                    <span className='ml-1'>Play</span>
                </button>
                <button className='flex mx-2 items-center px-6 py-1 bg-gray-500 bg-opacity-50 text-black rounded-md'>
                    <CiCircleInfo size="18px" />
                   <span className='ml-1'>Watch more</span> 
                </button>
            </div>
            </div>
        </div>
    )
}

export default VideoTitle