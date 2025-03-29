import { useState } from 'react'
import '../TailwindCompiled.css'

function MobileMenu(props){

  let filterData = props.filterData
  let setCatogary = props.setCatogary;
  let setIsMobileMenuOpen= props.setIsMobileMenuOpen;
  let isBodyClicked = props.isBodyClicked;
  let catogary = props.catogary;

  function filterClickHandler(data){
    setIsMobileMenuOpen(false);
    setCatogary(data);
  }



  return(
    <div className="w-[100%]">
      <ul className={`flex flex-col justify-center w-[100%] gap-1 backdrop-blur-2xl bg-black/10`}>
        {filterData.map((filterObj)=>
          <li key={filterObj.id} className={`backdrop-blur-2xl p-2 h-10 text-2xl flex items-center justify-around text-white  hover:font-extrabold ${catogary === filterObj.title ? 'border-2':''}`} onClick={()=>{filterClickHandler(filterObj.title)}}>{filterObj.title}</li>
        )}
      </ul>
    </div>
  )
}
export default MobileMenu