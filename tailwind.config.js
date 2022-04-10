module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'iron-image': "url('/img/carousel/iron-image.svg')",
        'sudsy-image': "url('/img/carousel/sudsy-image.svg')",
      },
      fontFamily: {
        body: ['Lato', 'sans-serif'],
        cursive: ['allura', 'cursive'],
      },
      colors: {
        primary: '#00A58C',
        main: '#006253',
        overlay: 'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
