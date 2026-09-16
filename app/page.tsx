import About from "@/components/home/About";
import Capabilities from "@/components/home/Capabilities";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Values from "@/components/home/Values";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Work />
      <Capabilities />
      <Partners />
      <Contact />
    </>
  );
}
