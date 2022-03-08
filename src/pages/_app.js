import React from 'react';
import { NextSeo } from 'next-seo';
import App from 'next/app';
import '../styles/globals.css'
import Navbar from '../components/Layout/Navbar'
import MainContent from '../components/Layout/MainContent';
import Footer from '../components/Layout/Footer';

class runApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <NextSeo
          title="DevHub - Developer Community"
          description="DevHub - Developer Community in Thailand"
        />
        <Navbar/>
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
        <Footer/>
      </div>
    );
  }
}

export default runApp;