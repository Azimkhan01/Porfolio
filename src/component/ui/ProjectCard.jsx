import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectCard({no,projectName,description}) {
  return (
    <div className='flex fle-col gap-3 justify-between'>
        
        <div className='flex flex-col justify-center items-center gap-1' >
            <div className='self-start'>
                <p className='text-[gray] text-sm'>{no}</p>
            </div>
            <div>
                <p className='text-sm font-normal'>{projectName}</p>
            </div>
        </div>

        <div className='w-4/6 justify-between flex p-4 border-b-2 hover:border-green-500'>
            <div className='flex justify-center items-center hover:border-green-500'>
                <p className='text-2xl font-light hover:text-green-500 '>{description}</p>
            </div>
            <div className='w-1/3'>
                <Link to={`/project/${projectName}`} className=' text-sm  font-thin flex justify-center items-center gap-3 hover:text-green-400' ><span className=' hover:underline underline-offset-4 '>View Porject</span> <FaArrowRightLong/> </Link>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard
