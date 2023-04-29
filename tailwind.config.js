/** @type {import('tailwindcss').Config} */

export const content = ["./dist/**/*.{html,js}"]
export const theme = {
  
  extend: {
    width: {
      'section': '1650px',
    },
    colors: {
      'primary': '#5B9981',
      'secondary': '#e6e6e6',
      'tertiary': '#D9C0C0',
      'border': '#4f806d',
    },

    fontFamily: {
      'voga': "'Voga Medium', sans-serif",
      'quicksand': "'Quicksand', sans-serif",
      'firasans': "'Fira Sans', sans-serif",
      'caveat': "'Caveat', sans-serif",
      'opensans': "'Open Sans', sans-serif",
      'fredoka': "'Fredoka', sans-serif",
      'gagalin': "'Gagalin', sans-serif",
    }
  },

}
export const plugins = []

