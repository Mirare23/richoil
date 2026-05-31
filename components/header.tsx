"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="Rich Oil Logo"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#products"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#benefits"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </Link>
          </div>

          <Link href="/contact" className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border space-y-3">
            <Link
              href="/"
              className="block text-sm text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#products"
              className="block text-sm text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#benefits"
              className="block text-sm text-foreground hover:text-primary transition-colors"
            >
              Benefits
            </Link>

            <Link href="/contact">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
