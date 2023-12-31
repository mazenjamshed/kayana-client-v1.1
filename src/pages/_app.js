// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  dark: {
    900: '#424B5A',
   
  },
};

export const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
