import Extensions from "../components/Extensions";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Bookmark Landing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon-new.ico" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <Extensions />    
      <Faq />
      <Cta />
      <Footer /> 
    </>
  )
}