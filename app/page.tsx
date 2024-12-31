import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/UI/FloatingNav";
import { FaHome } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
import Grid from "./Grid"
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <AboutMe />
        <Footer />
      </div>
    </main>
  );
}
