import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const packages = [
  {
    name: "LAUNCH PACKAGE",
    price: "₹20,000",
    sub: "For brands getting started with AI creatives",
    features: [
      "6 Base AI Videos",
      "2 Variations Each (18–20 total videos)",
      "Up to 3 Products",
      "Performance Predictions Report",
      "4-Day Delivery",
    ],
    cta: "Start with Launch →",
    ctaFill: false,
    best: "Best for: Early-stage D2C, first AI creative test",
    popular: false,
  },
  {
    name: "GROWTH PACKAGE",
    price: "₹35,000",
    sub: "For scaling brands ready to dominate their feed",
    features: [
      "12 Base AI Videos",
      "2 Variations Each",
      "5 Winning Iterations (tested concepts rebuilt)",
      "10 Performance Statics",
      "Up to 5 Products",
      "40–50 Total Creative Assets",
      "Weekly Performance Review Call",
    ],
    cta: "Get Growth Package →",
    ctaFill: true,
    best: "Best for: ₹5L–50L monthly ad spend brands",
    popular: true,
  },
  {
    name: "SCALE PACKAGE",
    price: "₹60,000",
    sub: "For brands who want to test 100 creatives/month",
    features: [
      "20 Base AI Videos",
      "3 Variations Each",
      "15 Winning Iterations",
      "30 Performance Statics",
      "Up to 8 Products",
      "80–100 Total Creative Assets",
      "Dedicated Creative Strategist",
      "Bi-weekly Strategy Calls",
    ],
    cta: "Unlock Scale →",
    ctaFill: false,
    best: "Best for: ₹50L+ monthly ad spend, VC-backed brands",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <SectionHeading
        label="PRICING"
        title="CHOOSE YOUR CREATIVE VELOCITY"
        sub="No retainer lock-ins. Pay per package. Own everything."
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative bg-card rounded-lg p-7 border transition-all ${
              pkg.popular
                ? "border-primary glow-orange-subtle scale-[1.02]"
                : "border-border hover:border-primary/50"
            }`}
          >
            {pkg.popular && (
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground font-body text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-2xl text-foreground">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 mt-3">
              <span className="font-stat font-bold text-4xl text-foreground">{pkg.price}</span>
              <span className="font-body text-muted-foreground text-sm">/month</span>
            </div>
            <p className="font-body text-muted-foreground text-sm mt-2">{pkg.sub}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {pkg.features.map((f) => (
                <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#sample-pack"
              className={`block text-center font-body font-semibold text-sm mt-8 px-6 py-3.5 rounded-lg transition-all min-h-[48px] ${
                pkg.ctaFill
                  ? "bg-primary text-primary-foreground glow-orange hover:glow-orange-intense hover:scale-[1.02]"
                  : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
              aria-label={pkg.cta}
            >
              {pkg.cta}
            </a>
            <p className="font-body text-xs text-muted-foreground mt-3 text-center">{pkg.best}</p>
          </motion.div>
        ))}
      </div>
      <p className="font-body text-xs text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
        All packages include: 100% creative ownership • Unlimited revisions within scope • Performance predictions • No lock-in contracts
      </p>
      <div className="section-divider mt-20" />
    </section>
  );
}
