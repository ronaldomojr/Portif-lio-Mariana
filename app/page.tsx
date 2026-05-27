import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Education from "./components/Education";
import ParallaxBanner from "./components/ParallaxBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />
      <Hero />
      <Work />
      <About />
      <Services />
      <Experience />
      <Education />
      <ParallaxBanner />
      <Contact />
      <Footer />
    </main>
  );
}
