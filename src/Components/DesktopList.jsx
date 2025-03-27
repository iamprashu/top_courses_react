import '../TailwindCompiled.css'
import { filterData } from '../includes/data'


function DesktopList(){
  return(<div className='flex max-w-[800px] md:min-w-[800px] min h-[50px] invisible md:visible items-center justify-evenly cente'>
    {filterData.map((obj)=>
    <div key={obj.id} className='bg-yellow-600 h-[40px] p-2 w-[110px] items-center text-center rounded-xl' >{obj.title}</div>)}
  </div>)
}

export default DesktopList