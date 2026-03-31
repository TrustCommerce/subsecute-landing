/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      'dm-sans': ['"DM Sans"', 'sans-serif'],
      'neue-power': ['"Space Grotesk"', 'Syne', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.8125rem',
      '4xl': '2rem',
      '5xl': '2.5rem'
    }
  }
}
