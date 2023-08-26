/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    {
      pattern: /(border|text|bg)-(default|primary|secondary|danger)-(1|2)/
    }
  ],
  theme: {
    extend: {
      colors: {
        'default-1': '#E0E0E0',
        'default-2': '#AEAEAE',
        'primary-1': '#2962FF',
        'primary-2': '#0039CB',
        'secondary-1': '#455A64',
        'secondary-2': '#1C313A',
        'danger-1': '#D32F2F',
        'danger-2': '#9A0007',
        'black-1': '#3F3F3F',
        'gray-1': '#9E9E9E'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      'noto-sans': ['Noto Sans JP', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      'ubuntu-mono': ['Ubuntu Mono', 'sans-serif']
    }
  },
  plugins: []
}
