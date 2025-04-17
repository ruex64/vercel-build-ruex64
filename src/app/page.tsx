import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Skills />
        <BackToTop />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
