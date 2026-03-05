import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const metrics = [
  { num: "3x", label: "Average ROAS improvement", sub: "Across Growth package clients" },
  { num: "45%", label: "Average hook rate", sub: "On top-performing AI videos" },
  { num: "4 Days", label: "Delivery SLA", sub: "Brief to final delivered files" },
  { num: "100+", label: "Brands served", sub: "D2C, wellness, fashion, beauty" },
  { num: "10x", label: "Creative output increase", sub: "vs traditional agencies" },
  { num: "80%", label: "First-pass QA rate", sub: "Quality without revisions" },
];

const testimonials = [
  {
    quote: "Mixed media delivered 20 creatives in 4 days. Our Meta ROAS went from 1.8x to 4.2x in 45 days.",
    author: "Skincare Brand Founder, Mumbai",
  },
  {
    quote: "Finally, a creative partner that thinks about performance, not just aesthetics. The variation testing framework is gold.",
    author: "D2C Wellness Brand, Bangalore",
  },
  {
    quote: "We went from 5 creatives/month to 60. Our CAC dropped 35% in 90 days.",
    author: "Supplements Brand Founder, Delhi",
  },
];

export default function Results() {
  return (
    <section id="results" className="section-padding">
      <SectionHeading label="PROOF" title="WHAT HAPPENS WHEN YOU TEST MORE CREATIVES" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="bg-card border border-border rounded-lg p-5 text-center"
          >
            <div className="font-stat font-bold text-3xl md:text-5xl text-primary">{m.num}</div>
            <div className="font-body text-foreground text-sm font-medium mt-2">{m.label}</div>
            <div className="font-body text-muted-foreground text-xs mt-1">{m.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="min-w-[300px] md:min-w-[380px] flex-shrink-0 snap-start bg-card border border-border border-l-4 border-l-primary rounded-lg p-6"
          >
            <p className="font-body text-foreground italic leading-relaxed">"{t.quote}"</p>
            <p className="font-body text-muted-foreground text-sm mt-4">— {t.author}</p>
          </motion.div>
        ))}
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
