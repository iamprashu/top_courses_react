import '../TailwindCompiled.css'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { toast } from 'react-toastify';
import { useState } from 'react';

function Card(props) {
  let course = props.course
  let likedCourses = props.likedCourses
  let setLikedCourses = props.setLikedCourses
  let catogary = props.catogary;



  function likeHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((oldLiked)=> oldLiked.filter((cid)=>cid !== course.id))
      toast.error(`You removed Like from ${course.title}`)
    }else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }else{
        setLikedCourses((oldLikedData)=>[...oldLikedData,course.id] )
      }
      toast.success(`You Liked ${course.title}`);

    }
  }
  return (<div className='w-[300px]  p-5 bg-gray-700  rounded-2xl  flex flex-col overflow-hidden gap-2 '>

    <div className='relative '>
      <img src={course.image.url} alt="" className='rounded-2xl' />
      <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-0 bottom-[0] grid place-items-center'>
        <button onClick={likeHandler}>
        <IconContext.Provider
          value={{ color: "blue", size: '30px' }}
        >{likedCourses.includes(course.id) ? <FcLike /> : <FcLikePlaceholder/>}</IconContext.Provider>
        </button>

      </div>
    </div>

    <div className='p-2'>
      <h1 className='font-extrabold text-white'>{course.title}</h1>
      
      <p className='text-white text-wrap mt-3'>{course.description}</p>
    </div>
  </div>)
}

export default Card;