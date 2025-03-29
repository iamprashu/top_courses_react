import '../TailwindCompiled.css'
import { FcLike } from 'react-icons/fc';
import { IconContext } from 'react-icons';

function Card({ course }) {
  return (<div className='w-[300px] bg-gray-700  rounded-2xl  flex flex-col overflow-hidden gap-2 '>

    <div className='relative '>
      <img src={course.image.url} alt="" className='rounded-2xl' />
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-0 bottom-[0] grid place-items-center'>
        <IconContext.Provider
          value={{ color: 'blue', size: '30px' }}
        ><FcLike /></IconContext.Provider>

      </div>
    </div>

    <div className='p-2'>
      <h1 className='font-extrabold text-white'>{course.title}</h1>
      <p className='text-white'>{course.description}</p>
    </div>
  </div>)
}

export default Card;