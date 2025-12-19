import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Events />
      <Contact />
      <News />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
