"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { productDetails } from "@/constants/product";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            All Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover our complete collection of premium oils from Bali
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productDetails.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
