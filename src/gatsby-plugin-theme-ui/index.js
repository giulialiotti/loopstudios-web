import "@fontsource/alata";
import "@fontsource/josefin-sans/300.css";

const theme = {
  breakpoints: [
    // Small - is added by theme-ui automatically
    // '@media screen and (min-width: 20em)', // 320px

    // Medium
    "@media screen and (min-width: 750px)",

    // Large
    "@media screen and (min-width: 1000px)",

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
      fontSize: "16px",
      padding: 0,
      margin: 0,
    },
    h1: {
      color: "white",
      fontFamily: "heading",
      fontSize: ["2.625em", "3.25em", "3.25em", "4.5em"], // 42px 52px 52px 72px
      textTransform: "uppercase",
    },
    h2: {
      color: "black",
      fontFamily: "heading",
      fontSize: ["2em", "2.625em", "2.625em", "3.25em"], // 32px 42px 42px 52px
      textTransform: "uppercase",
      textAlign: ["center", "center", "left", "left"],
    },
    body: {
      color: "gray",
      fontFamily: "body",
      fontSize: ["0.9375em", "1em", "0.9375em", "0.9375em"], // 15px 16px 15px 15px
      lineHeight: 1.8,
      textAlign: ["center", "center", "left", "left"],
    },
  },
  // variants for buttons
  buttons: {
    primary: {},
  },
};

export default theme;
