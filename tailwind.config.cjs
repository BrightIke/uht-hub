module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'uht-blue': '#0A58AB',
        'uht-accent': '#00B894'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(10,88,171,0.08)'
      }
    }
  },
  plugins: []
}
