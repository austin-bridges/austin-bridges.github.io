/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        fatface: ['"Abril Fatface"', ...defaultTheme.fontFamily.serif],
        "roboto-slab": ['"Roboto Slab"', ...defaultTheme.fontFamily.serif],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    // https://dev.to/tailus/apply-tailwindcss-classes-to-child-elements-via-the-parent-2i44
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ]
};