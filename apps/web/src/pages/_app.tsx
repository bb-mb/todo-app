import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

import { theme } from "@/styles";
import { initializeFirebase } from "@/common/settings/firebase";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
