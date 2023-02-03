import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  let text = "";
  const [state, setState] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  if(theme === "light"){
    text  = "🌙"
    }else{
    text  = "🌞"
    }
  return (
    <>
      <header className={`header-bar ${theme}`}>
        <h1
          className="header"
          style={{ fontFamily: "Nunito Sans", fontWeight: "800" }}
        >
          Where in the world ?
        </h1>
        <button
          onClick={() => {
            setState(!state);
            setTheme(state ? "light" : "dark");
          }}
          className="mode"
        >
        {text}
        </button>
      </header>
    </>
  );
};

export default Header;
