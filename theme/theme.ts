import { extendTheme, theme as t } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#f4f2f0",
    100: "#dcdad7",
    200: "#c4c0bc",
    300: "#afa7a0",
    400: "#998d83",
    500: "#807469",
    600: "#635a52",
    700: "#46413b",
    800: "#2a2724",
    900: "#0f0d0b",
  },
};

const sizes = {
  sizes: {
    ...t.space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    switch: "1161px",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fontSizes = {
  xs: "14px",
  sm: "16px",
  md: "20px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "54px",
  "4xl": "58px",
  "5xl": "64px",
};
const fonts = {
  heading: `HM Sans, sans-serif`,
  body: `HM Sans, sans-serif`,
};

const theme = extendTheme({ fontSizes, colors, fonts, config, sizes });

export default theme;
