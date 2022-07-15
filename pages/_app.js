import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

function Website({Component, pageProps,router}) {
  console.log('app')
  return (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Layout router={router}>
      <AnimatePresence>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </ChakraProvider>
  )
}

export default Website
