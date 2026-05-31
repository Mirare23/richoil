'use client';

import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Health & Wellness Coach',
    content: 'Rich Oil Indonesia has transformed my kitchen. The quality is unmatched, and I can taste the purity in every use.',
    rating: 5,
    avatar: '👩‍🦰',
  },
  {
    name: 'Marco Chen',
    role: 'Professional Chef',
    content: 'As a chef, I demand the best ingredients. These oils have elevated my cooking to new heights. Exceptional quality.',
    rating: 5,
    avatar: '👨‍🍳',
  },
  {
    name: 'Emma Thompson',
    role: 'Nutritionist',
    content: 'I recommend Rich Oil Indonesia to all my clients. The nutritional profile is excellent and sourcing is transparent.',
    rating: 5,
    avatar: '👩‍⚕️',
  },
  {
    name: 'David Patel',
    role: 'Home Cook',
    content: 'Perfect for everyday cooking and special occasions. The taste is incredible and worth every penny.',
    rating: 5,
    avatar: '👨‍💼',
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-xs font-semibold text-accent uppercase">Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Loved by Our Community
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Real experiences from people who trust Rich Oil Indonesia for quality and purity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 flex-grow">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
