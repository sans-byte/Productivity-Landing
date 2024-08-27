import { CallToAction } from "@/sections/CallToAction";
import FeatureShowcase from "@/sections/FeatureShowcase";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <FeatureShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
