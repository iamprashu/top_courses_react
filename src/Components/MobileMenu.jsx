import { useState } from 'react'
import '../TailwindCompiled.css'
import { filterData } from '../includes/data'
function MobileMenu(){
  return(
    <div className="w-[100%]">
      <ul className={`flex flex-col justify-center w-[100%] gap-2`}>
        {filterData.map((filterObj)=>
          <li key={filterObj.id} className='bg-gray-700 h-10 text-2xl flex items-center justify-around text-white  hover:font-extrabold '>{filterObj.title}</li>
        )}
      </ul>
    </div>
  )
}
export default MobileMenu