/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        inherit: 'inherit',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'dark'], // include dark mode
  },
  plugins: [],
}

