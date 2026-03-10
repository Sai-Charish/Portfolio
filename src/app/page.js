import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}
