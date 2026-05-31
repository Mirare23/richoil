'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="w-full py-12 sm:py-20 lg:py-28 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-14 w-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Mail className="w-7 h-7 text-primary-foreground" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-balance">
              Stay Connected
            </h2>

            <p className="text-base sm:text-lg text-primary-foreground/90 max-w-md">
              Subscribe to our newsletter for exclusive offers, recipes, and wellness tips delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-3 pt-6">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground flex-1"
              />
              <Button
                type="submit"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold w-full sm:w-auto"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>

            {subscribed && (
              <p className="text-primary-foreground/80 text-sm">
                ✓ Thank you for subscribing!
              </p>
            )}

            <p className="text-xs text-primary-foreground/60 pt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
