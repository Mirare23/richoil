"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/constants/product";
import { Dialog } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import ContactForm from "@/components/contact-form";
import BuyNowDialog from "@/components/buy-new-dialog";
import ProductCard from "@/components/product-card";

interface ProductDetailsProps {
  product: Product;
  productId: string;
  relatedProducts: Product[];
}

export default function ProductDetails({
  product,
  productId,
  relatedProducts,
}: ProductDetailsProps) {
  const [isBuyDialogOpen, setIsBuyDialogOpen] = useState(false);
  const [ImgIndex, setImgIndex] = useState(0);

  const changeImg = (index: number) => {
    setImgIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Left - Product Image */}
        <div className="flex flex-col gap-6">
          <img
            className="h-96 sm:h-[500px] object-cover rounded-2xl bg-white  overflow-hidden"
            src={product.image[ImgIndex]}
            alt={product.name}
          />
          <div className="flex gap-3">
            {product.image.map((imgSrc, i) => (
              <div
                key={i}
                className="h-20 w-20 rounded-lg bg-white cursor-pointer"
                onClick={() => changeImg(i)}
              >
                <img
                  src={imgSrc}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="flex flex-col gap-6">
          {/* Category & Title */}
          <div>
            <p className="text-sm font-semibold text-accent mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              {product.name}
            </h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
            </div>
            <span className="text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-4xl font-bold text-primary">{product.price}</div>

          {/* Description */}
          <p className="text-foreground/80 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity & Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={() => setIsBuyDialogOpen(true)}
              className="flex-1 max-md:hidden bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
              size="lg"
            >
              Buy Now
            </Button>
          </div>

          {/* Wishlist & Share */}
          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
            <div className="text-sm">
              <p className="font-semibold text-foreground">Free Shipping</p>
              <p className="text-xs text-muted-foreground">
                On orders over $50
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">100% Organic</p>
              <p className="text-xs text-muted-foreground">
                Certified authentic
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Benefits */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Key Benefits
          </h3>
          <ul className="space-y-3">
            {product.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex gap-3 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </Card>

        {/* Ingredients */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Pure Ingredients
          </h3>
          <ul className="space-y-3">
            {product.ingredients.map((ingredient: string, index: number) => (
              <li key={index} className="flex gap-3 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {ingredient}
              </li>
            ))}
          </ul>
        </Card>

        {/* Specifications */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Specifications
          </h3>
          <div className="space-y-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground capitalize">
                  {key.replace("_", " ")}
                </span>
                <span className="text-foreground font-medium text-right">
                  {value as string}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Usage */}
      <Card className="p-6 mb-16">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          How to Use
        </h3>
        <p className="text-foreground/80 leading-relaxed">{product.usage}</p>
      </Card>

      {/* Related Products */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">
          You Might Also Like
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((prod: any) => (
            <ProductCard key={prod.slug} product={prod} />
          ))}
        </div>
      </div>
      <Button
        onClick={() => setIsBuyDialogOpen(true)}
        className="md:hidden fixed bottom-0 w-full bg-primary hover:bg-primary/90 text-primary-foreground h-20 left-0 rounded-none z-50 border-t"
        size="lg"
      >
        Buy Now
      </Button>
      <BuyNowDialog
        isOpen={isBuyDialogOpen}
        onOpenChange={setIsBuyDialogOpen}
        productName={product.name}
      />
    </>
  );
}
