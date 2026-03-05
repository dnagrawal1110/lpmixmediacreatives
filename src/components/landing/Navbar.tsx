import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Packages", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "Sample Pack", href: "#sample-pack" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-16 lg:h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-heading text-[22px] tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
            <span className="text-foreground">MIX MEDIA</span>
            <span className="text-primary">CREATIVES</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com/mixmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm border border-primary text-primary px-5 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Book a free strategy call"
            >
              Book Free Call
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground p-2.5 rounded-lg hover:opacity-90 transition-opacity"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[101]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-card border-l border-border z-[102] p-6 flex flex-col"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end text-foreground p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-2xl text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="https://calendly.com/mixmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-center border border-primary text-primary px-5 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label="Book a free strategy call"
                >
                  Book Free Call
                </a>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
