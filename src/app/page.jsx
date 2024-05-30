import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import "./page.css";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Main() {
  return (
    <main className="wrapper">
      <Header />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </main>
  );
}
