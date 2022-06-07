import React from 'react'
import '../styles/globals.css'
import { NextSeo } from 'next-seo'
import { Provider } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Navbar from '../components/Layout/Navbar'
import MainContent from '../components/Layout/MainContent'
import Footer from '../components/Layout/Footer'

const App = ({ Component, pageProps, router }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextSeo
          title="DevHub - Developer Community"
          description="DevHub - Developer Community in Thailand"
        />
        <Navbar />
        <MainContent>
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial="pageInitial"
              animate="pageAnimate"
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                duration: 500,
              }}
              variants={{
                pageInitial: {
                  opacity: 0,
                  x: Math.random() < 0.5 ? 1000 : -1000,
                },
                pageAnimate: { opacity: 1, x: 0 },
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </MainContent>
        <Footer />
      </PersistGate>
    </Provider>
  )
}

export default App
