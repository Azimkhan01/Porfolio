import React from 'react'
function ExperienceCard({Role,companyName,date,type,description,skill,img}) {
    const skills = skill
  return (
    <div className='flex flex-col md:flex-row gap-5 md:gap-0'>
         <div className='flex  justify-between md:w-3/6 p-1  md:gap-3'>
            <div className='flex justify-center items-center'>
                <img  className=' h-10 md:h-12' src={`/skills/${img}`} />
            </div>
            <div className=' w-5/6 flex flex-col md:gap-1'>
                <div>
                    <h1 className='font-sans text-2xl md:text-3xl'>{Role}</h1>
                </div>
                <div>
                    <p className=' text-xs md:text-lg'>
                        {companyName}
                    </p>
                </div>
                <div>
                    <p className='text-xs md:text-lg'>{date} - {type}</p>
                </div>
            </div>
         </div>
         
         <div className='flex flex-col w-auto md:w-6/6'>
             <div>
                <p className=' text-xs md:text-xl text-left px-2'>{description}</p>
             </div>
             <div className='p-2 flex gap-x-1 gap-y-2 flex-wrap'>
                {
                    skills.map((data,i)=> <p className='px-4 py-2 font-semibold text-xs md:text-sm bg-green-300 rounded-4xl' key={i}>{data}</p>)
                }
             </div>   
         </div>      
    </div>
  )
}

export default ExperienceCard
