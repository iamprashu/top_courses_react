import MobileMenu from "./MobileMenu";
import '../TailwindCompiled.css'
import { useState } from "react";
function Navigation(props){
  let setCatogary = props.setCatogary;
  let filterData = props.filterData;
  let isBodyClicked = props.isBodyClicked;
  let catogary = props.catogary;
  const[isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
  

  
  
  function handleMobileMenu(event){
    event.preventDefault();
    (isMobileMenuOpen ) ? setIsMobileMenuOpen(false):setIsMobileMenuOpen(true);

  }

  function filterClickHandler(title){
    setCatogary(title)
  }
  return(
<div className="sticky top-0  w-full z-50 ">
  <section className=" mx-auto w-[100%]">
    <nav className="flex justify-between bg-gray-950 text-white w-[100%]">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="">
          Prashant Courses.
        </a>
        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
        {filterData.map((filterObj)=>
          <li key={filterObj.id} className={` h-10 text-2xl flex items-center justify-around text-white p-2 hover:text-gray-400 ${catogary === filterObj.title ? 'border-2':''}`} onClick={()=>{filterClickHandler(filterObj.title)}}>{filterObj.title}</li>
        )}
        </ul>
        
      </div>
    
      <a className="md:hidden top-1 navbar-burger self-center mr-5 xl:hidden" href="" onClick={handleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </a>
    </nav>
  </section>
  {isMobileMenuOpen && <MobileMenu catogary = {catogary} isBodyClicked={isBodyClicked} filterData={filterData} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} setCatogary={setCatogary}/>}

</div>

  )
}

export default Navigation;