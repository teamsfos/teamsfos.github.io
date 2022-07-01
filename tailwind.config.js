/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  daisyui: {
    themes: ['lemonade'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
