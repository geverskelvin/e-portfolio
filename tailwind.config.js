/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,vue,ts}', './components/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'propertyfi-green': 'hsla(160, 100%, 37%, 1);',
        'propertyfi-light-green': 'rgba(193,234,224,255);',
        'propertyfi-light-green-2': 'hsla(160, 100%, 37%, 0.2);',
        'propertyfi-light-grey': 'rgba(241,245,249,255);'
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        4: '4rem'
      }
    }
  },
  plugins: []
}
