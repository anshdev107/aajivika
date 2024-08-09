module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-blue": "#00E5E5",
        "gradient-dark-blue": "#72A5F2",
        "gradient-purple": "#E961FF",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fade-in 1s ease-in-out 0.04s infinite",
      },
    },
    fontFamily: {
      chakra: ["Chakra Petch"],
    },
  },
  plugins: [],
};
