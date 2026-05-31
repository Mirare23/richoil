import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductDetails from "@/components/product-details";
import { productDetails } from "@/constants/product";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = productDetails.find((p) => p.slug === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto max-w-7xl px-4 py-12 flex items-center justify-center">
          <p className="text-foreground text-lg">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = productDetails
    .filter((p) => p.slug !== id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        <ProductDetails
          product={product}
          productId={id}
          relatedProducts={relatedProducts}
        />
      </main>

      <Footer />
    </div>
  );
}
