import { useContext } from "react";
import { ThemeContext } from "@/Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const isLight = theme.state.lightMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className=" fixed top-7 left-2.5 z-999 flex h-7 w-7 items-center justify-around rounded-2xl border border-[#999] bg-white ">
      <img src={"projects/sun.png"} alt="icon" className="t-icon w-5 h-5 " />
      <img src={"projects/moon.png"} alt="icon" className="t-icon w-4 h-4 rounded-full" />
      <div
        className="absolute h-5 w-5 cursor-pointer rounded-full bg-[#999]"
        onClick={handleClick}
        style={{ left: theme.state.lightMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;