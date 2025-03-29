import Card from "./Card";
import '../TailwindCompiled.css'
import { useState } from "react";


function Cards(props){
  let FinalCourses = props.courses.data
  let catogary = props.catogary;
  const [likedCourses,setLikedCourses] = useState([])

  function getCourses(){
    if(catogary == "All"){
      let allCourses = []
    Object.values(FinalCourses).forEach(array => array.forEach(course=>{
      allCourses.push(course);
    }))
    return allCourses;
    }else{
      return FinalCourses[catogary];
    }

  }

  return(
    <div className="bg-gray-900 mt-10 md:w-[70%] p-2 justify-evenly flex flex-wrap gap-5">
      {getCourses().map(course=>
        <Card key={course.id} course={course} catogary={catogary} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
      )}
    </div>
  )

}

export default Cards;