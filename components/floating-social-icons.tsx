'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Instagram, Mail, Phone, Plus, X } from 'lucide-react';

export default function FloatingSocialIcons() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      icon: MessageCircle,
      href: 'https://wa.me/1234567890',
      label: 'WhatsApp',
      bgColor: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/richoilindonesia',
      label: 'Instagram',
      bgColor: 'bg-pink-500 hover:bg-pink-600',
    },
    {
      icon: Mail,
      href: 'mailto:contact@richojlindonesia.com',
      label: 'Email',
      bgColor: 'bg-accent hover:bg-accent/90',
    },
    {
      icon: Phone,
      href: 'tel:+62361234567',
      label: 'Phone',
      bgColor: 'bg-primary hover:bg-primary/90',
    },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50">
      {/* Expanded menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2 animate-in fade-in duration-200">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={() => setIsOpen(false)}
                className={`${social.bgColor} w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 text-white`}
                style={{
                  animation: `slideUp 0.3s ease-out ${index * 0.05}s both`,
                }}
                title={social.label}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={isOpen ? 'Close menu' : 'Open social menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Plus size={28} />}
      </button>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
