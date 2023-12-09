import { useTheme } from "next-themes";
import React from "react";

type Props = {};

const BurgerMenu = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <div className=" ">
      <div className="">
        <div
          className={`${
            theme === "dark" ? "bg-gray-800" : "bg-gray-50"
          } rounded-full themeSwitch`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            fill="currentColor"
            className="bi bi-list p-1 border  text-greenNight rounded-full"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
