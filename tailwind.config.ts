import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "outline-default":
          "bg-gradient-to-r from-slate-900 via-greenNight to-slate-900",
      },
      colors: {
        outlineDefault: "",
        greenNight: "#01EFA2",
        orangeNight: "#FF8E4F",
        blueNight: "#01C2ED",
        pinkNight: "#FF62F9",
        purpleNight: "#8244FF",
        skyNight: "#3E97FF",
      },
    },
  },
  plugins: [],
};
export default config;
