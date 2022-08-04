import "./Sidebar.css";
import { Link } from "react-router-dom";
import logoClose from "../../assets/icons/menu-close.png";
import SwitchMode from "../SwitchMode/SwitchMode";

import useAnime from "../../hooks/useAnime";

const Sidebar = () => {
  const { useSidebar, setUseSidebar } = useAnime();
  const handleClose = () => {
    setUseSidebar(false);
  };
  return (
    <div className={`${useSidebar ? "sidebar" : "sidebar-none"}`}>
      <figure className="sidebar__picture">
        <SwitchMode />
        <img
          className="sidebar__close"
          src={logoClose}
          onClick={handleClose}
          alt="logo-cerrar"
        />
      </figure>
      <Link to="/" className="sidebar__link" onClick={handleClose}>
        Inicio
      </Link>
      <Link to="/top" className="sidebar__link" onClick={handleClose}>
        Top
      </Link>
      <Link to="/mangas" className="sidebar__link" onClick={handleClose}>
        Mangas
      </Link>
    </div>
  );
};

export default Sidebar;
