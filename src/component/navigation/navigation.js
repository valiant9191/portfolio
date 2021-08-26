import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  const [state, setState] = useState(false);

  const hoverMenu = () => {
    setState(true);
  };
  const leaveMenu = () => {
    setState(false);
  };

  return (
    <div className="Menu">
      {state ? (
        <div className="menu-open" >
          <div className='links-block'>
          <p className='bg-text'>{`<body>`}</p>

              <div className='close-box' onClick={() => leaveMenu()}></div>
              <p className='bg-text'>{`<section class='navigation'>`}</p>
          <h2>
              <Link className="link" to="/">
                {`Val`}
              </Link>
            </h2>
            <h2>
              <Link className="link" to="/about">
                {`< About />`}
              </Link>
            </h2>
            <h2>
              <Link className="link" to="/project">
                {`< Portfolio />`}
              </Link>
            </h2>
            <h2>
              <Link className="link" to="/contact">
                {`< Contacts />`}
              </Link>
            </h2>
            <p className='bg-text'>{`< /section>`}</p>

          </div>
          <div className="info">
         
            <div>
            
            <p className='bg-text'>{`<div class='info'>`}</p>
            <p className='bg-text'>{`<p>`}</p> 
            <p>
              Valentin Kolko, <br />
              Front-End developer <br />
              Belarus, Minsk <br />
              <a href="mailto: valiant9191@gmail.com">Mail to me:</a>{" "}
              valiant9191@gmail.com
              </p>
              <p className='bg-text'>{`</p>`}</p>

              <p className='bg-text'>{`<div>`}</p>

            </div>
          </div>
          <p className='bg-text last'>{`< / body>`}</p>

        </div>
      ) : (
        <div className="menu-closed" onClick={() => hoverMenu()}>          
        </div>
      )}
    </div>
  );
};
export default Navigation;
