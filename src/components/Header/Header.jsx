import "./Header.css";
import SwitchMode from "../SwitchMode/SwitchMode";
import logo from "../../assets/icons/logo.png";
import logoMenu from "../../assets/icons/menu.png";
import darklogoPage from "../../assets/icons/menu-close.png";

import useAnime from "../../hooks/useAnime";

import { Link } from "react-router-dom";

const Header = () => {
  const { setUseSidebar, darkPage, setDarkPage } = useAnime();
  return (
    <header className={`header ${darkPage && "darkPage--header"}`}>
      <nav className="nav container">
        <div className="nav__logo">
          <img src={logo} alt="" className="nav__img" />
          <p className="nav__title">ANIMENSHOU </p>
        </div>
        <div className={`nav__links ${darkPage && "darkPage--letter"}`}>
          <Link
            to="/"
            className={`nav__link ${darkPage && "darkPage--letter"}`}
          >
            Inicio
          </Link>
          <Link
            to="/top"
            className={`nav__link ${darkPage && "darkPage--letter"}`}
          >
            Top
          </Link>
          <Link
            to="/mangas"
            className={`nav__link ${darkPage && "darkPage--letter"}`}
          >
            Mangas
          </Link>
          <SwitchMode/>
        </div>
        <div className="nav__menu" onClick={() => setUseSidebar(true)}>
          <img className="nav__menu--img" src={logoMenu} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
