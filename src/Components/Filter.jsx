import { useState } from 'react';
import '../TailwindCompiled.css'
import { IoIosMenu } from "react-icons/io";
import MobileList from './MobileList';
import DesktopList from './DesktopList';



function Filter(){
    const[isMenuOpen,setMini] = useState(false);

    function ExpandMenu(){
        let value = isMenuOpen ? false : true;
        setMini(value)
    }

    return(
        <div className='bg-[#181818] h-[50px] w-screen'>
            <div className='flex justify-end flex-col md:flex-row md:justify-around '>
            <IoIosMenu size={50} color={'#ECDFCC'} onClick={ExpandMenu} className='md:hidden'/>
            {isMenuOpen ? <MobileList /> :<DesktopList></DesktopList> } 
            </div>
        </div>
    )
}


export default Filter