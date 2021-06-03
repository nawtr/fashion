import { createBox, createText, createTheme } from "@shopify/restyle";

export const theme = createTheme({
  colors: {
    primary: "#2cb9b0",
    default: "rgba(12,13,52,0.05)",
    gray: "rgba(12,13,52,0.05)",
    button: "#0C0D34",
    title: "#0C0D34",
    text: "rgba(12, 13, 52,0.7)",
    white: "white",
    grey: "rgba(12, 13, 52,0.05)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 40,
    xxl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      color: "title",
      fontFamily: "SFProDisplay-SemiBold",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "title",
      fontFamily: "SFProDisplay-SemiBold",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "text",
      fontFamily: "SFProDisplay-Regular",
    },
    button: {
      fontSize: 15,
      fontWeight: "500",
      color: "text",
      fontFamily: "SFProDisplay-Regular",
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
