import About from "@/components/About";
import ContactSection from "@/components/Connect";
import { AnimatedTooltipPreview } from "@/components/ExecSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import GeneralMembership from "@/components/MemberShip";
import Navbar from "@/components/NavBar";
import EventGrid from "@/components/PastEvents";
import ProgramsSection from "@/components/ProgramSection";
import { Testimonials } from "@/components/Testimonials";
// import { VortexDemoSecond } from "@/components/Think";
import UpcomingEvents from "@/components/UpcommingEvent";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <AnimatedTooltipPreview />
      <ProgramsSection />
      <EventGrid />
      {/* <UpcomingEvents /> */}
      <ImpactSection />
      <Testimonials />
      <GeneralMembership />
      {/* <VortexDemoSecond/> */}
      <ContactSection />
    </div>
  );
}
