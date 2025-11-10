import Loading from "@/components/Loading";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import FAQSchema from "@/components/FAQSchema";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <FAQSchema />
      <Loading />
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Testimonials />
      <Team />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}
