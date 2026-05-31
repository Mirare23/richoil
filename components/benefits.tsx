'use client';

import { Leaf, Heart, Droplets, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Certified organic oils without pesticides or harmful chemicals. Pure nature in every bottle.',
  },
  {
    icon: Droplets,
    title: 'Cold-Pressed',
    description: 'Traditional cold-pressing methods preserve nutrients and authentic flavors naturally.',
  },
  {
    icon: Heart,
    title: 'Health Benefits',
    description: 'Rich in antioxidants, vitamins, and essential fatty acids for optimal wellness.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable',
    description: 'Ethical farming practices that support local communities and protect the environment.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 sm:py-20 lg:py-28 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-xs font-semibold text-accent uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Crafted with Purpose
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Every oil embodies our commitment to quality, purity, and your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
