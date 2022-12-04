import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

// Head
import Head from "next/head";

// `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Custom colors
const colors = {
  main: "#ba4270",
  second: "#fbfcfe",
  dark: "#1b262f",
  textColor: "#6c8294",
  titleColor: "#36536b",
};

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {/* Head */}
      <Head>
        <meta
          name="description"
          content="This 4-page website will be a great test for your HTML & CSS skills. You'll be building out a marketing site, complete with custom form validation throughout."
        />

        <link
          rel="shortcut icon"
          href="./assets/favicon.png"
          type="image/x-icon"
        />

        <title>PayAPI - Landing page</title>
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
}
