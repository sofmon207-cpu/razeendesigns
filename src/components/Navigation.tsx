import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NavLink {
  href: string;
  label: string;
  isRoute?: boolean;
}

const navLinks: NavLink[] = [{
  href: '#home',
  label: 'Home'
}, {
  href: '#about',
  label: 'About'
}, {
  href: '/my-work',
  label: 'My Work',
  isRoute: true
}, {
  href: '#services',
  label: 'Services'
}, {
  href: '#contact',
  label: 'Contact'
}];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold text-primary">SR.<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => 
              link.isRoute ? (
                <Link key={link.href} to={link.href} className="relative font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a key={link.href} href={link.href} className="relative font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
            <Button variant="hero" size="sm">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map(link => 
              link.isRoute ? (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="block font-body text-lg text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block font-body text-lg text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              )
            )}
            <Button variant="hero" size="lg" className="w-full mt-4">
              Hire Me
            </Button>
          </div>
        </motion.div>}
    </motion.nav>;
};
export default Navigation;