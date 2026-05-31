"use client";

import { useSearchParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { Suspense } from "react";

// 1. Extract the content that uses useSearchParams into a separate component
function ContactContent() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our premium oils or need more information?
              We&apos;d love to hear from you. Fill out the form below and our
              team will respond shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Send us a Message
                </h2>
                <ContactForm productName={productName || undefined} />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Location */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Location
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-12">
                    Bali, Indonesia
                    <br />
                    Jalan Raya Canggu
                  </p>
                </div>
                {/* Hours */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Business Hours
                    </h3>
                  </div>
                  <div className="text-muted-foreground ml-12 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                {/* Email */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Email
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-12">
                    <a
                      href="mailto:contact@richoilindonesia.com"
                      className="hover:text-primary transition-colors"
                    >
                      contact@richoilindonesia.com
                    </a>
                  </p>
                </div>
                {/* Phone */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Phone
                    </h3>
                  </div>
                  <p className="text-muted-foreground ml-12">
                    <a
                      href="tel:+62361234567"
                      className="hover:text-primary transition-colors"
                    >
                      +62 (361) 234-567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// 2. Export the main page component that wraps the child in Suspense
export default function ContactPage() {
  return (
    // You can optionally add a fallback UI here, e.g., fallback={<div>Loading...</div>}
    <Suspense>
      <ContactContent />
    </Suspense>
  );
}
