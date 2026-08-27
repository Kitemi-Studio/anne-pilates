"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 50);
  });

  const navLinks = [
    { label: "Approche", href: "#approche" },
    { label: "Cours & Formats", href: "#cours" },
    { label: "Studio", href: "#studio" },
    { label: "Tarifs & Horaires", href: "#planning" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-charcoal/5 py-4 px-8 md:px-12 shadow-sm"
            : "bg-transparent border-transparent py-8 px-8 md:px-12"
        }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between w-full">
          {/* Mobile view: Title on left, burger on right */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Link
              href="/"
              className={`font-sans text-lg font-normal tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              ANNE <span className="font-black">PILATES</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex flex-col justify-between w-6 h-3 focus:outline-none relative z-50 group cursor-pointer"
              aria-label="Open Menu"
            >
              <span
                className={`w-full h-[1px] transition-all duration-300 ${
                  scrolled ? "bg-charcoal" : "bg-white"
                }`}
              />
              <span
                className={`w-full h-[1px] transition-all duration-300 ${
                  scrolled ? "bg-charcoal" : "bg-white"
                } self-end`}
              />
            </button>
          </div>

          {/* Desktop view: Left Logo, Center nav, Right Booking */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left side: Logo */}
            <div className="w-[25%] flex justify-start">
              <Link
                href="/"
                className={`font-sans text-base font-normal tracking-[0.25em] uppercase transition-colors duration-300 hover:opacity-80 inline-block whitespace-nowrap ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                ANNE <span className="font-black text-slate-light">PILATES</span>
              </Link>
            </div>

            {/* Center: Nav links */}
            <nav className="flex space-x-6 xl:space-x-8 w-[50%] justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] font-sans font-normal tracking-[0.22em] uppercase transition-colors duration-300 hover:text-slate-light hover-underline-animation pb-1 ${
                    scrolled ? "text-charcoal/90 hover:text-slate" : "text-white/90 hover:text-slate-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Booking button */}
            <div className="w-[25%] flex items-center justify-end">
              <Link
                href="#contact"
                className={`text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all duration-500 inline-block shadow-xs ${
                  scrolled
                    ? "bg-slate text-white hover:bg-slate-dark"
                    : "bg-white/95 text-charcoal hover:bg-slate hover:text-white"
                }`}
              >
                RÉSERVER
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-obsidian/95 backdrop-blur-2xl z-50 flex flex-col justify-center px-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center focus:outline-none cursor-pointer group"
              aria-label="Close Menu"
            >
              <div className="relative w-6 h-6">
                <span className="absolute block w-6 h-[1px] bg-white/70 group-hover:bg-slate-light rotate-45 top-3 left-0 transition-colors duration-300" />
                <span className="absolute block w-6 h-[1px] bg-white/70 group-hover:bg-slate-light -rotate-45 top-3 left-0 transition-colors duration-300" />
              </div>
            </button>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={link.label}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-2xl font-sans font-light tracking-[0.25em] uppercase hover:text-slate-light transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-slate hover:bg-slate-dark text-white text-xs font-sans font-medium tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-all duration-300 inline-block shadow-md"
                >
                  RÉSERVER UN COURS
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
