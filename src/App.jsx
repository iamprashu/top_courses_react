import './TailwindCompiled.css'
import Filter from './Components/Filter';
import Heading from './Components/Heading';
import Cards from './Components/Cards';
function App(){
    return(<div className='bg-[#000000] h-screen w-screen'>
        <Heading></Heading>
        <Filter></Filter>
        <Cards></Cards>
    </div>)
}

export default App;