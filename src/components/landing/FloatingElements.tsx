import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingElements() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      if (scrollTop / docHeight > 0.3 && !stickyDismissed) setShowSticky(true);
      else if (scrollTop / docHeight <= 0.3) setShowSticky(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [stickyDismissed]);

  return (
    <>
      {/* Scroll progress */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollPercent}%` }}
      />

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center animate-pulse-ring hover:scale-110 transition-transform"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={24} className="text-foreground" />
      </a>

      {/* Mobile sticky CTA */}
      {showSticky && !stickyDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-[998] lg:hidden bg-card border-t border-border p-3 flex items-center gap-3">
          <a
            href="#sample-pack"
            className="flex-1 font-body font-semibold text-sm text-center bg-primary text-primary-foreground py-3.5 rounded-lg glow-orange min-h-[48px] flex items-center justify-center"
            aria-label="Get 3 AI videos for 999 rupees"
          >
            Get 3 AI videos for ₹999 →
          </a>
          <button
            onClick={() => setStickyDismissed(true)}
            className="text-muted-foreground p-1"
            aria-label="Dismiss"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </>
  );
}
