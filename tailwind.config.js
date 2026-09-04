/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cheongdam: {
          black: '#111111',
          charcoal: '#1E1E22',
          muted: '#71717A',
          subtle: '#A1A1AA',
          border: '#E4E4E7',
          light: '#F8F9FA',
          white: '#FFFFFF',
        },
        brand: {
          DEFAULT: '#111111',
          hover: '#27272A',
          subtle: '#F4F4F5',
        },
        clinic: {
          DEFAULT: '#1E293B',
          tag: '#0EA5E9',
          light: '#F0F9FF',
          border: '#BAE6FD',
        },
        beauty: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        editorial: {
          black: '#111111',
          dark: '#18181B',
          muted: '#71717A',
          border: '#E4E4E7',
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        serif: ['Pretendard', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'luxury': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'glow': '0 4px 20px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
