/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81b14f',
        accent: '#8faab3',
        text: '#150801',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            a: {
              color: 'var(--color-accent)',
              '&:hover': {
                color: 'var(--color-primary)',
              },
            },
            h1: {
              color: 'var(--color-text)',
            },
            h2: {
              color: 'var(--color-text)',
            },
            h3: {
              color: 'var(--color-text)',
            },
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
