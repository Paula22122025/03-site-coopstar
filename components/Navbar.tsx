"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Quem Somos", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-blue-900/30 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-800 p-2 rounded-lg">
            <Rocket className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-white" : "text-blue-500"
          )}>
            Coopstar<span className="text-blue-400">Express</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                isScrolled ? "text-slate-300" : "text-slate-200"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:1150523563"
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95 border border-blue-700"
          >
            <Phone size={16} />
            (11) 5052-3563
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-300 hover:text-blue-400 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:1150523563"
                className="flex items-center justify-center gap-2 bg-blue-800 text-white py-4 rounded-xl font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={20} />
                Ligar Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
