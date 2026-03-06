import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WA_NUMBER = "919130940991";

export default function FloatingElements() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div id="scroll-progress" style={{ width: `${scrollPercent}%` }} />

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Mix Media! I'd like to know more about your AI creative services.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-6 right-6 z-[999] w-14 h-14 bg-[hsl(var(--success))] rounded-full flex items-center justify-center animate-pulse-ring hover:scale-110 transition-transform"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} className="text-foreground" />
      </a>

      {/* Mobile sticky CTA — always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-[998] lg:hidden bg-card border-t border-border p-3">
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I want to get the ₹999 Sample Pack – 3 AI videos for my brand.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full font-body font-semibold text-sm text-center bg-primary text-primary-foreground py-3.5 rounded-lg glow-orange min-h-[48px] flex items-center justify-center"
          aria-label="Get 3 AI videos for 999 rupees"
        >
          Get 3 AI videos for ₹999 →
        </a>
      </div>
    </>
  );
}
