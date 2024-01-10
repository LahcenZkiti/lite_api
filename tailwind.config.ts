import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          10: '#FFE7DA',
          20: '#FFF2D4',
          50: '#F26C23',
          60: '#FCE4D8',
          100: '#F3EDG7',
        },
        blue: {
          10: '#ADD8E6',
          50: '#251f5d',
          100: '#19172C',
          200: '#2C2A3D',
          300: '#3C3A4C',
        },
        gray: {
          10: '#696876',
          20: '#F6F6F7',
          30: '#DCDCDF',
          40: '#9897A0',
        },
        indigo: {
          10: '#9683EC',
          500: '#F7D8F3',
        }
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}
export default config
