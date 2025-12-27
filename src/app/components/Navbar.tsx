import { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'DIY Kits', href: '#kits' },
    { name: 'Courses', href: '#courses' },
    { name: 'Lab Setup', href: '#lab-setup' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 blur-xl bg-primary/30" />
            </div>
            <span className="font-['Space_Grotesk'] tracking-tight" style={{ fontSize: '24px', fontWeight: 700 }}>
              NextBot <span className="text-primary">Labs</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="relative group bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all duration-300">
              <span className="relative z-10">Get Started</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/20 bg-card/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
