import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A4D73",
        secondary: "#7B5E90",
        tertiary: "#5FC5D7",
        grey1: "#ebfafc73",
        grey2: "#d9d9d973",
        grey3: "#fbfafc73",
      },
      margin: {
        26: "6.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
