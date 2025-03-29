import Navigation from './Components/Navigation';
import './TailwindCompiled.css'
import { apiUrl, filterData } from './includes/data';
import Cards from './Components/Cards';
import { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

function App(){
  const[courses,setCourses] = useState(null)
  const[loading,setLoading] = useState(true);
  const[catogary,setCatogary] = useState(filterData[0].title);
  const[isBodyClicked,setBodyClicked] = useState(false);

  function bodyClickHandler(){
    setBodyClicked(true);
  }

      async function getData(){
        setLoading(true);
        try{
          let rawResponse = await fetch(apiUrl);
          let jsonResponse = await  rawResponse.json();
          setCourses(jsonResponse);
        }catch(error){
          toast.error('error')
        }
        setLoading(false)
      }

      useEffect(()=>{getData()},[])
  return(
    <div className='bg-gray-900 min-h-screen h-[100%] w-[100%] flex flex-col items-center ' onClick={bodyClickHandler}>
      <Navigation catogary={catogary} isBodyClicked={isBodyClicked} setCatogary={setCatogary} filterData={filterData}></Navigation>
      {loading ? (<Spinner/>) : (<Cards courses={courses} catogary={catogary}/>)}
    </div>
  )
}

export default App;