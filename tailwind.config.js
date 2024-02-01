/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lemon_chiffon': "#FCF6CE",
        'cafe_noir': "#41290A",
        'jasmine': '#F3D479',
        'caramel': '#D57B33',
        'tigers_eye': '#AC721F'
      },
      fontFamily: {
        milksty: ["Milksty", "sans-serif"],
        friend: ["Friend", "sans-serif"],
      },
    }
  },
  plugins: [],
};
