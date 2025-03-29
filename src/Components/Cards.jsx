import Card from "./Card";
import '../TailwindCompiled.css'


function Cards({courses}){
  let FinalCourses = courses.data
  console.log(courses.data)

  function getCourses(){
    let allCourses = []
    Object.values(FinalCourses).forEach(array => array.forEach(course=>{
      allCourses.push(course);
    }))
 
    console.log(allCourses)

    return allCourses;
  }

  return(
    <div className="bg-gray-900  w-[100%] p-2 justify-around flex flex-wrap gap-5">
      {getCourses().map(course=>
        <Card key={course.id}course={course}></Card>
      )}
    </div>
  )

}

export default Cards;