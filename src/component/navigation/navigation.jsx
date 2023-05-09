import { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MobileMenu } from "./mobileMenu/mobileMenu";
import img from "../../assets/logo-no-background.png";

function Navigation() {
  const [state, setState] = useState(false);
  const { width } = useWindowSize();

  const openMenu = () => {
    setState(true);
  };
  const closeMenu = () => {
    setState(false);
  };
  const one = [];
  return (
    <div className="menu">
      <div className="menu__logo">
        <img src={img} alt="logotip val" />
      </div>
      {width < 720 ? (
        <MobileMenu
          state={state}
          onClickOpen={openMenu}
          onClickClose={closeMenu}
        />
      ) : (
        <header className="menu__header">
          <ul className="menu__header_list">
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
        </header>
      )}
    </div>
  );
}
export { Navigation };
