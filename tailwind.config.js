/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: [
      {
        notaryApp: {
          primary: "#028ca1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
