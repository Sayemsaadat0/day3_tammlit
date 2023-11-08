import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   'tm-primary-1': '#your-color-hex-1',
      //   'tm-primary-2': '#your-color-hex-2',
      // },
     },
  },
  plugins: [],
}
export default config
