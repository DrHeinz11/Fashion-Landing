import { extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-serif-text";
const theme = extendTheme({
  fonts: {
    heading: `'DM Serif Text', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
