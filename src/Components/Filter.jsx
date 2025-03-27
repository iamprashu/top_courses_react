import { useState } from 'react';
import '../TailwindCompiled.css'
import { filterData } from '../includes/data'
import { IoIosMenu } from "react-icons/io";
import MobileList from './MobileList';



function Filter(){
    const[displayMini,setMini] = useState(false);
    function ExpandMenu(){
        // <MobileList></MobileList>
        setMini(true)
    }
    return(
        <div className='bg-amber-700 h-[50px] w-screen'>
            <div className='flex justify-end'>
            <IoIosMenu size={50} onClick={ExpandMenu} className='md:hidden'/>

            {displayMini ? <MobileList /> : <div>hello</div> } 


            </div>
        </div>
    )
}


export default Filter