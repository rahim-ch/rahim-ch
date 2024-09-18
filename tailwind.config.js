module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Ensure Tailwind scans the correct files
  ],
  theme: {
    extend: {
      fontFamily: {
          // Make sure this is configured
      },
    },
  },
  plugins: [],
};
