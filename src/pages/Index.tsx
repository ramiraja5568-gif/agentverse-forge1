import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PricingPreview from "@/components/sections/PricingPreview";
import Testimonials from "@/components/sections/Testimonials";
import ContactPreview from "@/components/sections/ContactPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingPreview />
        <Testimonials />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
