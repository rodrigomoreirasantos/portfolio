import Image from "next/image";
import Header from "../components/ui/header";
import Hero from "@/components/ui/hero";
import About from "@/components/ui/about";
import Projects from "@/components/ui/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Header />

      <Hero />

      <div id="about" className="container w-full">
        <About />
      </div>

      <div id="projects" className="container w-full flex flex-col gap-12 py-6">
        <Projects />
      </div>
    </div>
  );
}
