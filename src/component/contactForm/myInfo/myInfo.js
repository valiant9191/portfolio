import React from 'react';
import linkedin from  '../../../assets/LinkedIn.png';
import github from '../../../assets/github.png';

const MyInfo = () => (
<div>
          Valentin Kolko, <br />
          Front-End developer <br />
          Belarus, Minsk <br />
          <a href="mailto: valiant9191@gmail.com">valiant9191@gmail.com</a>
          <br />
          phone : <a href="tel: +375 (29) 359 32 15 ">+375 293593215</a>
          <div className='links'><img  src={linkedin} alt='LinkedIn logo'></img><a  href='https://www.linkedin.com/in/valentin-kolko/'>Linkedin</a>
              </div>
              <div className='links'><img  src={github} alt='LinkedIn logo'></img><a  href='https://www.linkedin.com/in/valentin-kolko/'>Github</a><br/>
              </div>
        </div>
)
export default MyInfo;