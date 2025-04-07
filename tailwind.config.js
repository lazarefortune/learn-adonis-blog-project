/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./resources/**/*.edge",
    "./resources/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    fontFamily: {
      'sora': ['Sora']
    },
    extend: {},
  },
  plugins: [],
}

