import type {Config} from 'tailwindcss';

import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#FEF9E6',
        greenishOutline: '#15451F',
        pinkishOutline: '#571530',
        blueishOutline: '#163959',
        yellowishOutline: '#594A16',
        greenishBackground: '#43DD65',
        pinkishBackground: '#F03986',
        blueishBackground: '#3C9BF2',
        yellowishBackground: '#F2CA3C',
      },
      boxShadow: {
        card: '8px 8px 0px 0px rgba(0, 0, 0, 1);',
        greenishButton: '4px 4px 0px 0px rgba(21, 69, 31, 1)',
        pinkishButton: '4px 4px 0px 0px #571530',
        blueishButton: '4px 4px 0px 0px #163959',
        yellowishButton: '4px 4px 0px 0px #594A16',
      },
    },
  },
  plugins: [],
};
export default config;
