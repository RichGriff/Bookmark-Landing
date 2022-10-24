import Extensions from "../components/Extensions";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Cta from "../components/Cta";


export default function Home() {
  return (
    <>
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