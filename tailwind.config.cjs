module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        roboto: ['Roboto'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        'main': '#e002a2',
        'second': '#47019d',
        'three': '#e00256',
        'black': '#212121',
        'white': '#ffffff',
        'gray': '#808080e2',
      },
    },
  },
  plugins: [],
};
