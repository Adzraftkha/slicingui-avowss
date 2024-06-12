const { text } = require("stream/consumers");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
      },
      colors: {
        bg1: "#F8F8F8",
        bg2: "#00AB4E",
        bg3: "#088E41",
        text: {
          100: "#088E41",
          200: "#505050",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-nav": {
          "background-image": "url(/images/nav.png)",
          backgroundPosition: "fixed",
        },
        ".bg-landingpage": {
          "background-image": "url(/images/landingpage.svg)",
  
        },
        ".bg-search": {
          "background-image": "url(/images/search.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px",
        },
        ".bg-lokasi": {
          "background-image": "url(/images/lokasi.svg)",
          backgroundRepeat: "no-repeat",
          
        },
        ".bg-hp": {
          "background-image": "url(/images/hp.svg)",
          backgroundRepeat: "no-repeat",
          
        },
        ".bg-telp": {
          "background-image": "url(/images/telp.svg)",
          backgroundRepeat: "no-repeat",
          
        },
        ".bg-cc": {
          "background-image": "url(/images/cc.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px",
        },
        ".bg-ebook": {
          "background-image": "url(/images/ebookbg.svg)",
  
        },
      };
      addUtilities(utilities);
    }),
  ],
};
