import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/inter";
const theme = extendTheme({
  fonts: {
    body: `"Inter Variable", sans-serif`,
    heading: `"Inter Variable", sans-serif`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

export default theme;
