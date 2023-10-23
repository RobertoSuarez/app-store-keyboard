import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ChakraProvider, extendBaseTheme, extendTheme } from '@chakra-ui/react'
import useDebugRender from "tilg";


const theme = extendTheme({
  colors: {
    brand: {
      100: "#B6FFFA",
      200: "#98E4FF",
      300: "#80B3FF",
      500: "#687EFF",
    }
  }
})

export default function App() {
  useDebugRender();

  return (
    <Fragment>
      <ChakraProvider theme={theme}>
        <Outlet />
        <ScrollRestoration />
      </ChakraProvider>
    </Fragment>
  );
}
