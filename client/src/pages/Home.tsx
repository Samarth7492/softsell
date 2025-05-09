import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import ContactForm from "@/components/ContactForm";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-800 dark:text-gray-200 dark:bg-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <Stats />
        <ContactForm />
        <Cta />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
