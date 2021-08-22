import React,{useEffect,useState}  from 'react';

import './App.scss';
import Landing from './component/landing/landing';
import BgImage from './component/landing/bgImage/bgImage'
import Navigation from './component/navigation/navigation';

import Spinner from './component/spinner/Spinner';


const App =()=>{

const[stateBgImage,setStateBgImage]=useState(false)
const[stateSpinner,setStateSpinner]=useState(false)


useEffect(() => {
  setTimeout(()=>setStateBgImage(true),4000)  
  setTimeout(()=>setStateSpinner(false),2200)
  setTimeout(()=>setStateSpinner(true),200)  
}, [])


  return(<div className="App">
    <Navigation />
    {<Landing/>}
    {
      stateSpinner  ?
        <Spinner />
      : 
        <div  className="App">
       
        {stateBgImage&&<BgImage />}      
        </div>
    }
        

    </div>
  )
}
export default App;
