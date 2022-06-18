import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body, #__next": {
        height: "100%",
        fontFamily: "Noto Sans KR",
      },
    }),
  },
});
