/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        black: "#0B0B0B",
        dark: "#121212",
        cream: "#F8F5F0"
      },

      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"]
      },

      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,.35)"
      },

      backdropBlur: {
        xs: "2px"
      },

      borderRadius: {
        xl2: "1.25rem"
      },

      backgroundImage: {
        hero:
          "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.75)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4')"
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        fade: "fade 1s ease",
        slide: "slide 0.8s ease"
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-10px)"
          }
        },

        fade: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },

        slide: {
          from: {
            opacity: 0,
            transform: "translateY(40px)"
          },
          to: {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      }
    }
  },

  plugins: []
};
