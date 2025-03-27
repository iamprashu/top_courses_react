import '../TailwindCompiled.css'
import { filterData } from '../includes/data'


function MobileList(){
    function navHandler(){
        alert('data sent')
    }
    return(
        <ul className='bg-[#1f1819]/20 backdrop-blur-xl flex flex-col h-[200px] gap-2 '>
            {filterData.map((Obj)=>{
            return <li key={Obj.id} className=' bg-[#363636] p-2  text-center text-2xl font-bold text-white hover:text-blue-300' onClick={navHandler}>{Obj.title}</li>})}
        </ul>
    )
}

export default MobileList;