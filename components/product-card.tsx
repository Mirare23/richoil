import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/constants/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link key={product.slug} href={`/product/${product.slug}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="px-6 pb-6 flex flex-col h-full">
          {/* Product Image/Icon */}
          <img
            src={product.image[0]}
            alt={product.name}
            className=" aspect-square h-80  mb-4 rounded-lg object-cover object-center [image-orientation:from-image]"
          />

          {/* Product Info */}
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
            {product.name}
            {product.specifications?.volume
              ? ` - ${product.specifications.volume}`
              : null}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4 mt-auto">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-sm">
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="font-bold text-primary text-lg">
              {product.price}
            </span>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
