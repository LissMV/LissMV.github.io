/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        turquesa: '#2AC984',
        cyan: '#338B85',
        gris_azul: '#9AB1AF',
        gris_claro: '#CDCACA',
        aqua_claro: '#54C3BB',
        violeta: '#6B2188',
      },
    },
  },
  plugins: [],
}
