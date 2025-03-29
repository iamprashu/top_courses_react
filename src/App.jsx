import Navigation from './Components/Navigation';
import './TailwindCompiled.css'
import { apiUrl } from './includes/data';
import Cards from './Components/Cards';
import { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

function App(){
  const[courses,setCourses] = useState(null)
  const[loading,setLoading] = useState(true);

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
    <div className='bg-gray-900 h-screen w-[100%] flex flex-col'>
      <Navigation></Navigation>
      {loading ? (<Spinner/>) : (<Cards courses={courses}/>)}
    </div>
  )
}

export default App;