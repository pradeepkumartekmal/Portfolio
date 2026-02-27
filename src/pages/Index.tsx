import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Expertise from "@/components/Expertise";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

const Index = () => {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero onOpenAppointment={() => setAppointmentOpen(true)} />
        <Stats />
        <About />
        <Resume />
        <Expertise />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </div>
  );
};

export default Index;
