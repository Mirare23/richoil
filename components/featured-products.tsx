"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import { productDetails } from "@/constants/product";

export default function FeaturedProducts() {
  return (
    <section
      id="products"
      className="w-full py-12 sm:py-20 lg:py-28 bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-xs font-semibold text-accent uppercase">
              Featured Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our Premium Selection
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Handpicked oils crafted with care and authenticity from our Bali
            farms to your table.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productDetails.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
