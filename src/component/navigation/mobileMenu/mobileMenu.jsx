import { Link } from "react-router-dom";

import linkedin from "../../../assets/LinkedIn.png";
import github from "../../../assets/github.png";

function MobileMenu({state, onClickOpen, onClickClose}) {
  return (
    state ? (
        <div className="menu-open">
          <div className="links-block">
            <p className="bg-text">{`<body>`}</p>

            <button type="button" onClick={onClickClose}>
              <div className="close-box" />
            </button>
            <p className="bg-text">{`<section class='navigation'>`}</p>
            <ul>
              <li>
                <Link className="link" to="/">
                  `Val`
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  {`< About />`}
                </Link>
              </li>
              <li>
                <Link className="link" to="/project">
                  {`< Portfolio />`}
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  {`< Contacts />`}
                </Link>
              </li>
            </ul>

            <p className="bg-text">{`< /section>`}</p>
          </div>
          <div className="info">
            <div>
              <p className="bg-text">{`<div class='info'>`}</p>
              <p className="bg-text">{`<p>`}</p>
              <div>
                Valentin Kolko, <br />
                Front-End developer <br />
                Belarus, Minsk <br />
                <div className="links">
                  <img src={linkedin} alt="LinkedIn logo" />
                  <a href="https://www.linkedin.com/in/valentin-kolko/">
                    Linkedin
                  </a>
                </div>
                <div className="links">
                  <img src={github} alt="LinkedIn logo"/>
                  <a href="https://www.linkedin.com/in/valentin-kolko/">
                    Github
                  </a>
                  <br />
                </div>
                <div className="links">
                  <a href="mailto: valiant9191@gmail.com">Mail to me: </a>{" "}
                  valiant9191@gmail.com
                </div>
              </div>
              <p className="bg-text">{`</p>`}</p>
              <p className="bg-text">{`<div>`}</p>
            </div>
          </div>
          <p className="bg-text last">{`< / body>`}</p>
        </div>
      ) : (
        <button type="button" onClick={onClickOpen}>
          <div className="menu-closed" >
            <div className="menu-closed-hamburger"/>
            <h4 className="menu-closed-text">Menu</h4>
          </div>
        </button>
      )
  )
};

export {MobileMenu};