// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontSize: {
        "16": "50rem",
    },
    colors: {
      "primary": "#2680c0",
      "primary-dark": "hsl(205, 100%, 21%)",
      "primary - light": "hsl(205, 84 %, 74 %)",
      "grey - 1": "#102a42",
      "grey - 5": "#617d98",
     "grey - 10": "#f1f5f8",
     "white": "#fff",
     "red - dark": "hsl(360, 67 %, 44 %)",
     "red - light": "hsl(360, 71 %, 66 %)"
  },
  plugins: [],
}
}
