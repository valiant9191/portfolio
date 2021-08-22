import React, {useEffect, useState} from 'react'

import './landing.scss'



const Landing =()=>{


      // state 
  const [welcomeSection,setWelcomeSection]=useState(0);

  useEffect(() => {
    setTimeout(newChangeI,5000)
    function newChangeI(){ setInterval((changeI), 3000)}
    function changeI(){

        const languages=[
            'Добро пожаловать','Witamy','Laukiamas',
            'Welkom','Vitejte','Velkomst',
            'Tere tulemast','Tervetuloa','Welgekomen',
            'Bienvenue','Willkommen','Failte',
            'Benvenuto','Gaidits'
          ]
          setWelcomeSection(languages[testI])
          testI=(testI+1)
          if(testI>languages.length){testI=0}
      }
      let testI=0;
}, []) ;

  // changing welcome with interval




  // text for landing page 
  const textForLeft='Frontend';
  const textForRight='Developer';
  const textForCenter=`Hi, I'm  Valentin`;


  let textLeft=textForLeft.split('').map((el,id)=>{return(<span key={id} className='letter'>{el}</span>)});
  let textRight=textForRight.split('').map((el,id)=>{return(<span key={id} className='letter'>{el}</span>)});
  let textCenter=textForCenter.split('').map((el,id)=>{return(<span key={id} className={`letter letter-row`}>{el}</span>)});




    return(

    <div className="Landing" >
      <div className='App-line'>

        <h1 className='App-row'>
            {textLeft}
        </h1>

        <div className="Welcome">  
            <h1 className='letter'>
              {textCenter}
            </h1>
            <br/>
            

            <h1 className='letter'>
              {welcomeSection? welcomeSection :"Welcome"}
            </h1>

        </div>

        <h1 className='App-row'>
            {textRight}
        </h1>

      </div>        
    </div>
 

    )
}
export default Landing;