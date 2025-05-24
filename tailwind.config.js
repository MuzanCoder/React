/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2563eb',
            light: '#3b82f6',
          },
          secondary: {
            DEFAULT: '#4b5563',
            light: '#6b7280',
          },
        },
      },
    },
    plugins: [],
  }