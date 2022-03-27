import "@fontsource/alata";
import "@fontsource/josefin-sans";

const theme = {
  breakpoints: [
    // Small - is added by theme-ui automatically
    // '@media screen and (min-width: 20em)', // 320px

    // Medium
    "@media screen and (min-width: 750px)",

    // Xlarge
    "@media screen and (min-width: 1400px)",
  ],
  colors: {
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    gray: "hsl(0, 0%, 55%)",
    darkgray: "hsl(0, 0%, 41%)",
  },
  // variants for typography settings
  fonts: {
    body: "Alata, sans-serif",
    heading: "Josefin Sans, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 300,
  },
  lineHeights: {
    body: 1,
    heading: 1,
  },
  // variants for styles
  styles: {
    root: {
      boxSizing: "border-box",
      padding: 0,
      margin: 0,
    },
    h1: {
      fontFamily: "heading",
      fontSize: 32,
      textTransform: "uppercase",
    },
    body: {
      fontFamily: "body",
      fontSize: 15
    },
  },
  // variants for buttons
  buttons: {
    primary: {},
  },
};

export default theme;
