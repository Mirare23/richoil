"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 bg-primary/10 rounded-full border border-accent/20">
              <span className="text-xs font-semibold text-accent uppercase">
                Cold Pressed
              </span>
              <span className="text-xs text-accent">✓ Certified Organic</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-foreground leading-tight">
              Taste the Farm in
              <span className="text-primary"> Every Drop</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              Experience the purest expression of nature with Rich Oil
              Indonesia. Sustainably sourced and crafted for culinary
              excellence, we bring authentic, uncompromising flavor directly
              from our local farms to your table.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Products
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-border hover:bg-muted text-foreground"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Natural Ingredients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  Cold Pressed
                </div>
                <div className="text-sm text-muted-foreground">
                  Preserves Nutrients
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Bali</div>
                <div className="text-sm text-muted-foreground">Sourced</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/images/hero.jpeg"
              alt="Rich Oil Indonesia - Premium Cold-Pressed Oils"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
