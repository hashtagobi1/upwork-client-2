"use client";

import React from "react";
import { useTheme } from "next-themes";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 
      transition-all duration-100 text-white
      dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg
      absolute bottom-32"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      Toggle Mode
    </button>
  );
};

export default ThemeToggle;