import { Menu, X, Phone, PlaySquare } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'YouTube', href: '#youtube' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105 shadow-lg shadow-purple-500/20">
                RM
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text tracking-tight">Maths with Ritu Mahajan</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-2.5 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Book Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F19] border-t border-white/5 shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-orange-600 w-full shadow-lg shadow-orange-500/20"
            >
              Book Free Trial Class
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
