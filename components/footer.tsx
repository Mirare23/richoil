"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground border-t border-primary/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p className="text-sm opacity-80">
              Premium natural oils sourced from the heart of Bali.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Shop</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/products"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                All Products
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © 2026 Rich Oil Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm opacity-80">Secure Checkout</span>
            <span className="text-sm opacity-80">
              100% Satisfaction Guarantee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
