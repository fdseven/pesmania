const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin");
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      gradientColorStops: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          invert: withOpacity("--color-invert"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
    },
    fontFamily: {
      PremierLeague: ["'PremierLeague'", ...defaultTheme.fontFamily.sans],
      PremierLeague2024: ["'PremierLeague2024'", "Arial", "Verdana", "Tahoma"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background:
            "linear-gradient(90deg, #7366FF 0%, #00f2e1 34.9%, #7366FF 69.79%, #F36B32 100%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          " -webkit-text-fill-color": "transparent",
        },
        ".text-shadow": {
          "text-shadow": "3px 3px 1px #000;",
        },
      });
    },
  ]

};
