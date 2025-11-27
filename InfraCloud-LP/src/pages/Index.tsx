import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCtaClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCtaClick={handleCtaClick} />
      <main className="flex-1">
        <Hero onCtaClick={handleCtaClick} />
        <HowItWorks />
        <Benefits />
        <Pricing onCtaClick={handleCtaClick} />
        <Testimonials />
        <FAQ />
        <FinalCTA onCtaClick={handleCtaClick} />
      </main>
      <Footer />
      <InterestForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
};

export default Index;
