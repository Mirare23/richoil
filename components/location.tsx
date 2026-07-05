"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const stores = [
  {
    id: 1,
    name: "Grand Lucky Store",
    location: "All over Bali & Jakarta",
    img: "/assets/images/list-stores/grandlucky.png",
  },
  {
    id: 2,
    name: "Gourmet Market Store",
    location: "All over Bali",
    img: "/assets/images/list-stores/gourmet.png",
  },
  {
    id: 3,
    name: "Bali Buda",
    location: "All over Bali",
    img: "/assets/images/list-stores/bali.jpg",
  },
  {
    id: 4,
    name: "Green Habits Store",
    location: "Denpasar, Bali",
    img: "/assets/images/list-stores/greenhabit.png",
  },
  {
    id: 5,
    name: "Pepito",
    location: "ALl over Bali",
    img: "/assets/images/list-stores/pepito.png",
  },
  {
    id: 6,
    name: "Bintang Supermarket",
    location: "Ubud",
    img: "/assets/images/list-stores/bintang.jpeg",
  },
];

export default function StoresSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Where to Find Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Visit our authorized retailers across Bali to experience and
            purchase Rich Oil Indonesia products. All stores are carefully
            selected to ensure the highest quality service.
          </p>
        </div>

        {/* All Stores */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            All Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <Card
                key={store.id}
                className="bg-card border border-border hover:shadow-lg transition-shadow p-6 flex justify-center"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {store.name}
                    </h4>
                    <p className="text-sm text-secondary font-medium mb-4">
                      {store.location}
                    </p>
                  </div>
                  <Image
                    src={store.img}
                    alt={store.name}
                    width={100}
                    height={50}
                    className="rounded-lg object-contain max-w-[100px]"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-muted/30 rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Can&apos;t Find Us Nearby?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Contact us directly and we&apos;ll help you locate the nearest store
            or arrange a delivery to your location.
          </p>
          <a href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
