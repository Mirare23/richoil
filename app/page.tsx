"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedProducts from "@/components/featured-products";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import LocationSection from "@/components/location";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <LocationSection />
      <Footer />
    </div>
  );
}
