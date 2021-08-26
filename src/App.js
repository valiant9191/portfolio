import React,{useEffect,useState}  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Navigation from './component/navigation/navigation';
import Landing from './component/landing/landing';
import About from './component/about/About';
import Projects from './component/projects/Projects';
import ContactForm from './component/contactForm/Contact';

import BgImage from './component/landing/bgImage/bgImage'
import Spinner from './component/spinner/Spinner';

import './App.scss';

const App =()=>{

const[stateBgImage,setStateBgImage]=useState(false)
const[stateSpinner,setStateSpinner]=useState(false)


useEffect(() => {
  setTimeout(()=>setStateBgImage(true),4000)  
  setTimeout(()=>setStateSpinner(false),2200)
  setTimeout(()=>setStateSpinner(true),200)  
}, [])


  return(<div className="App">
    <Router>
    <Switch>      
      <Route exact path='/'>
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
      </Route >
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/project'>
        <Projects/>
      </Route>
      <Route path='/contact'><ContactForm/></Route>


    </Switch>
    </Router>
    </div>
  )
}
export default App;
