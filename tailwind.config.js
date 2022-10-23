/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34ef9e",

          secondary: "#b97ded",

          accent: "#f5b3fc",

          neutral: "#d9f99d",

          "base-100": "#403E42",

          info: "#8DD8F2",

          success: "#27B95F",

          warning: "#E2AA03",

          error: "#F1120E",
        },
      },
    ],
  },
};
