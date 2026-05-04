import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import BevcoLogo from './BevcoLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Catalog', href: '#catalog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bev-paper/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <BevcoLogo 
          className="h-10" 
          color={isScrolled ? "var(--color-bev-navy)" : (mobileMenuOpen ? "var(--color-bev-navy)" : "white")} 
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-bev-gold ${
                isScrolled ? 'text-bev-navy' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`p-2 rounded-full transition-colors ${
            isScrolled ? 'bg-bev-navy text-bev-paper' : 'bg-white/10 text-white hover:bg-white/20'
          }`}>
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-bev-navy' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-bev-paper z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-serif text-bev-navy hover:text-bev-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              className="mt-8 px-10 py-4 bg-bev-navy text-bev-paper rounded-full font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
