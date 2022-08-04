import "./SwitchMode.css";

import logoLight from "../../assets/icons/dia.png";
import logoDark from "../../assets/icons/noche.png";

import useAnime from "../../hooks/useAnime";

const SwitchMode = () => {
  const { darkPage, setDarkPage } = useAnime();
  return (
    <div className="switchmode">
      <input
        className="switchmode__checkbox"
        type="checkbox"
        name=""
        id="switch-label"
      />
      <label
        className={`switchmode__label ${
          !darkPage ? "darkPage--border" : "switchmode__checkbox--dark"
        }`}
        htmlFor="switch-label"
        onClick={() => setDarkPage(!darkPage)}
      >
        <img className="switchmode__image" src={logoLight} alt="" />
        <img className="switchmode__image" src={logoDark} alt="" />
        <div
          className={`switchmode__circle ${
            darkPage && "switchmode__circle--active"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default SwitchMode;
