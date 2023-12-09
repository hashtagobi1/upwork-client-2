"use client";

import React from "react";
import { useTheme } from "next-themes";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      className="text-red-500"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      Toggle Mode
    </button>
  );
};

export default ThemeToggle;
