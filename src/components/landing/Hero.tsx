import { motion } from "framer-motion";

const WA_NUMBER = "919130940991";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const stats = [
  { num: "150+", label: "Ads Delivered", sub: "Across D2C brands" },
  { num: "4 Days", label: "Average Delivery", sub: "From brief to final video" },
  { num: "3x", label: "Avg ROAS Lift", sub: "Reported by growth clients" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center grain-overlay grid-bg section-padding pt-12 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 border border-primary/40 text-primary rounded-full px-4 py-1.5 text-xs font-body mb-8 glow-orange-subtle"
        >
          🤖 AI-Powered Creative Engine
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-heading leading-[0.95] tracking-wide"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          <span className="block text-foreground">YOUR COMPETITORS</span>
          <span className="block text-gradient">ARE TESTING 100 ADS.</span>
          <span className="block text-foreground">YOU'RE TESTING 3.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="font-body text-muted-foreground text-lg md:text-[22px] leading-relaxed max-w-2xl mt-6"
        >
          Mix Media Creatives builds AI-powered ad creative systems for D2C
          brands — 20 to 100 scroll-stopping videos/month, 4-day delivery,
          fraction of traditional agency cost.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in the ₹999 Sample Pack (3 AI videos). Please share more details.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-base bg-primary text-primary-foreground px-8 py-4 rounded-lg glow-orange hover:scale-[1.03] hover:glow-orange-intense transition-all text-center min-h-[48px]"
            aria-label="Get your 999 rupee sample pack"
          >
            Get Your ₹999 Sample Pack →
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book a free strategy call with Mix Media Creatives.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-base border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all text-center min-h-[48px]"
            aria-label="Book free strategy call"
          >
            📞 Book Free Strategy Call
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.4)}
          className="font-body text-xs text-muted-foreground mt-4"
        >
          ✓ No agency retainer &nbsp; ✓ 4-day delivery &nbsp; ✓ Own all rights
        </motion.p>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="bg-card border border-border border-t-2 border-t-primary rounded-lg p-5 text-center"
          >
            <div className="font-stat font-bold text-primary text-4xl">{s.num}</div>
            <div className="font-body text-foreground text-sm font-medium mt-1">{s.label}</div>
            <div className="font-body text-muted-foreground text-xs mt-0.5">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
