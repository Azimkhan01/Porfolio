import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
function DownloadResume() {

    const [isClick,setIsClick] = useState(false)

  return (
    <div className={`${isClick ? 'w-40 h-50' : ' w-20 h-20' } flex flex-col  justify-evenly  items-center transition-all ease-out duration-200  z-5 fixed bottom-5 rounded-3xl border-1 border-white right-5  bg-[#000000df]`}>
        <div className={`${!isClick ? "hidden" : "flex flex-col gap-5 items-center justify-between"} `}>
            <button className='text-white text-sm md:text-sm font-thin border-2 border-gray-500 rounded-lg p-2'>Download</button>
            <a href="https://drive.google.com/file/d/1CdXV-ppti4JGorPqHsF8er3DBav8cCC2/view?usp=drivesdk"><AiOutlineDownload className='text-white text-2xl  hover:scale-150 transition-all ease-linear duration-200' /></a>
        </div>
        <button className={` ${isClick ? ' h-12 p-3 mb-5 rotate-45 text-white bg-black border-1 border-[gray]' : "bg-white" } h-1/2 text-2xl font-light   p-2 rounded-full flex justify-center items-center transition-all ease-in-out duration-300`} onClick={()=>{setIsClick(!isClick)}}><IoMdAdd/></button>
    </div>  
  )
}

export default DownloadResume
