import { motion } from "framer-motion";

const WA_NUMBER = "919130940991";

const beforeItems = [
  "3 creatives/month",
  "₹50k agency fee",
  "3-week wait",
  "No testing strategy",
];
const afterItems = [
  "20–100 creatives/month",
  "From ₹999",
  "4-day delivery",
  "Systematic testing",
];

export default function SamplePack() {
  return (
    <section
      id="sample-pack"
      className="section-padding bg-card border-y border-primary/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 glow-orange-subtle pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 border border-primary/40 text-primary rounded-full px-4 py-1.5 text-xs font-body mb-6">
            🔥 RISK-FREE ENTRY
          </span>
          <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-4">TRY IT FOR ₹999</h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Not sure if AI creatives work for your brand? Start with a sample pack — no commitment.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {[
              "1 Base AI Video (15–30 sec vertical)",
              "2 Hook Variations (3 videos total)",
              "Performance Predictions (1-page PDF)",
              "Creative Scale Roadmap",
              "4-Day Delivery Guaranteed",
            ].map((f) => (
              <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I want to order the ₹999 Sample Pack (3 AI videos, 4-day delivery). Let's go!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full lg:w-auto lg:inline-block text-center font-body font-bold text-base bg-primary text-primary-foreground px-10 py-4 rounded-lg glow-orange hover:glow-orange-intense hover:scale-[1.02] transition-all min-h-[48px]"
            aria-label="Get my 999 rupee sample pack"
          >
            GET MY ₹999 SAMPLE PACK
          </a>
          <p className="font-body text-xs text-muted-foreground mt-3">
            💬 Order via WhatsApp • Instant confirmation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-background border border-border rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-border bg-destructive/5">
              <h4 className="font-heading text-xl text-destructive mb-4">BEFORE</h4>
              <ul className="flex flex-col gap-3">
                {beforeItems.map((item) => (
                  <li key={item} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-destructive">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-success/5">
              <h4 className="font-heading text-xl text-success mb-4">AFTER</h4>
              <ul className="flex flex-col gap-3">
                {afterItems.map((item) => (
                  <li key={item} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-success">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center py-3 font-heading text-2xl text-primary bg-card border-t border-border">
            → UPGRADE YOUR CREATIVE SYSTEM
          </div>
        </motion.div>
      </div>
    </section>
  );
}
