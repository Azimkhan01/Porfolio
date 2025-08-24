import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectCard({no,projectName,description,link}) {
  return (
    <div className='flex flex-col md:flex-row gap-3 justify-between'>
        
        <div className='flex flex-col justify-center items-center' >
            <div className='self-start'>
                <p className='text-[gray] text-xs'>0{no}</p>
            </div>
            <div className='self-start'>
                <p className='text-sm font-normal'>{projectName}</p>
            </div>
        </div>

        <div className=' w-full md:w-4/6 justify-between flex py-2 md:p-4 border-b-2 hover:border-green-500'>
            <div className='  flex justify-center items-center hover:border-green-500 pr-1'>
                <p className='text-sm md:text-2xl font-light hover:text-green-500 leading-6'>{description}</p>
            </div>
            <div className='w-1/3'>
                <Link to={link} className=' text-xs md:text-sm  font-thin flex justify-center items-center gap-3 hover:text-green-400' ><span className=' hover:underline underline-offset-4 '>View Project</span> <FaArrowRightLong/> </Link>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard
