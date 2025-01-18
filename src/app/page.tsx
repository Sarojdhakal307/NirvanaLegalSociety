import About from "@/components/About";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import Navbar from "@/components/NavBar";
import ProgramsSection from "@/components/ProgramSection";
import UpcomingEvents from "@/components/UpcommingEvent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <ProgramsSection/>
      <UpcomingEvents/>
      <ImpactSection/>
    </div>
  );
}
