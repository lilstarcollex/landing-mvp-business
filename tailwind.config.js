/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#020617',
        surface: '#0F172A',
        surfaceAlt: '#111827',
        text: '#F8FAFC',
        muted: '#CBD5E1',
        border: '#1E293B',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 20px 80px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}
