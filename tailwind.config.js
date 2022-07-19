module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '5rem',
        'middle': '10rem',
        'large': '12rem',
        'extralarge': '20rem'  
      },
      fontFamily:{
        'Dancing': 'Dancing Script',
        'Fira': 'Fira Sans',
        'Fredoka': 'Fredoka'
      }
    },
  },
  plugins: [],
}
