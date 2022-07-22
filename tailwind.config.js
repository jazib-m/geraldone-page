/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        "bg-orange": {
          '50': '#fff9ed',
          '100': '#fff2d5',
          '200': '#ffd88f',
          '300': '#ffca72',
          '400': '#fda93a',
          '500': '#fc8e13',
          '600': '#ed7109',
          '700': '#c4560a',
          '800': '#9c4310',
          '900': '#7d3911',
      }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
